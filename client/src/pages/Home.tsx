import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { APP_TITLE } from "@/const";

interface CalculationResults {
  ev: number | null;
  evRevenue: number | null;
  evEbitda: number | null;
}

interface FormData {
  companyName: string;
  marketCap: string;
  totalDebt: string;
  cash: string;
  revenue: string;
  ebitda: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    marketCap: "",
    totalDebt: "",
    cash: "",
    revenue: "",
    ebitda: "",
  });

  const [results, setResults] = useState<CalculationResults>({
    ev: null,
    evRevenue: null,
    evEbitda: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [hasCalculated, setHasCalculated] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const marketCap = parseFloat(formData.marketCap);
    const totalDebt = parseFloat(formData.totalDebt);
    const cash = parseFloat(formData.cash);
    const revenue = parseFloat(formData.revenue);
    const ebitda = parseFloat(formData.ebitda);

    if (!formData.marketCap || isNaN(marketCap) || marketCap < 0) {
      newErrors.marketCap = "Market Capitalization is required and must be a positive number";
    }

    if (!formData.totalDebt || isNaN(totalDebt) || totalDebt < 0) {
      newErrors.totalDebt = "Total Debt is required and must be a positive number";
    }

    if (!formData.cash || isNaN(cash) || cash < 0) {
      newErrors.cash = "Cash & Cash Equivalents is required and must be a positive number";
    }

    if (!formData.revenue || isNaN(revenue) || revenue < 0) {
      newErrors.revenue = "Revenue is required and must be a positive number";
    }

    if (!formData.ebitda || isNaN(ebitda) || ebitda < 0) {
      newErrors.ebitda = "EBITDA is required and must be a positive number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateMetrics = () => {
    if (!validateForm()) {
      return;
    }

    const marketCap = parseFloat(formData.marketCap);
    const totalDebt = parseFloat(formData.totalDebt);
    const cash = parseFloat(formData.cash);
    const revenue = parseFloat(formData.revenue);
    const ebitda = parseFloat(formData.ebitda);

    // Calculate EV = Market Cap + Total Debt - Cash
    const ev = marketCap + totalDebt - cash;

    // Calculate EV / Revenue
    const evRevenue = revenue > 0 ? ev / revenue : null;

    // Calculate EV / EBITDA
    const evEbitda = ebitda > 0 ? ev / ebitda : null;

    setResults({
      ev,
      evRevenue,
      evEbitda,
    });

    setHasCalculated(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleReset = () => {
    setFormData({
      companyName: "",
      marketCap: "",
      totalDebt: "",
      cash: "",
      revenue: "",
      ebitda: "",
    });
    setResults({
      ev: null,
      evRevenue: null,
      evEbitda: null,
    });
    setErrors({});
    setHasCalculated(false);
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formatMultiple = (value: number | null): string => {
    if (value === null) return "N/A";
    return value.toFixed(2) + "x";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">{APP_TITLE}</h1>
          <p className="text-lg text-slate-600">
            Calculate Enterprise Value and key valuation multiples
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Financial Metrics</CardTitle>
              <CardDescription>
                Enter your company's financial data to calculate valuation metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Company Name */}
                <div>
                  <Label htmlFor="companyName" className="text-sm font-medium">
                    Company Name (Optional)
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="e.g., Acme Corp"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                {/* Market Capitalization */}
                <div>
                  <Label htmlFor="marketCap" className="text-sm font-medium">
                    Market Capitalization *
                  </Label>
                  <Input
                    id="marketCap"
                    name="marketCap"
                    type="number"
                    placeholder="0"
                    value={formData.marketCap}
                    onChange={handleInputChange}
                    className={`mt-1 ${errors.marketCap ? "border-red-500" : ""}`}
                  />
                  {errors.marketCap && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.marketCap}
                    </p>
                  )}
                </div>

                {/* Total Debt */}
                <div>
                  <Label htmlFor="totalDebt" className="text-sm font-medium">
                    Total Debt *
                  </Label>
                  <Input
                    id="totalDebt"
                    name="totalDebt"
                    type="number"
                    placeholder="0"
                    value={formData.totalDebt}
                    onChange={handleInputChange}
                    className={`mt-1 ${errors.totalDebt ? "border-red-500" : ""}`}
                  />
                  {errors.totalDebt && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.totalDebt}
                    </p>
                  )}
                </div>

                {/* Cash & Cash Equivalents */}
                <div>
                  <Label htmlFor="cash" className="text-sm font-medium">
                    Cash & Cash Equivalents *
                  </Label>
                  <Input
                    id="cash"
                    name="cash"
                    type="number"
                    placeholder="0"
                    value={formData.cash}
                    onChange={handleInputChange}
                    className={`mt-1 ${errors.cash ? "border-red-500" : ""}`}
                  />
                  {errors.cash && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.cash}
                    </p>
                  )}
                </div>

                {/* Revenue */}
                <div>
                  <Label htmlFor="revenue" className="text-sm font-medium">
                    Annual Revenue *
                  </Label>
                  <Input
                    id="revenue"
                    name="revenue"
                    type="number"
                    placeholder="0"
                    value={formData.revenue}
                    onChange={handleInputChange}
                    className={`mt-1 ${errors.revenue ? "border-red-500" : ""}`}
                  />
                  {errors.revenue && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.revenue}
                    </p>
                  )}
                </div>

                {/* EBITDA */}
                <div>
                  <Label htmlFor="ebitda" className="text-sm font-medium">
                    EBITDA *
                  </Label>
                  <Input
                    id="ebitda"
                    name="ebitda"
                    type="number"
                    placeholder="0"
                    value={formData.ebitda}
                    onChange={handleInputChange}
                    className={`mt-1 ${errors.ebitda ? "border-red-500" : ""}`}
                  />
                  {errors.ebitda && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.ebitda}
                    </p>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={calculateMetrics}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  >
                    Calculate
                  </Button>
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="flex-1"
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Display */}
          <div className="space-y-4">
            {hasCalculated && (
              <>
                {/* Company Name Display */}
                {formData.companyName && (
                  <Card className="shadow-lg bg-blue-50 border-blue-200">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="text-blue-600" size={20} />
                        <div>
                          <p className="text-sm text-blue-600 font-medium">Company</p>
                          <p className="text-lg font-semibold text-blue-900">
                            {formData.companyName}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Enterprise Value */}
                <Card className="shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="text-green-600" size={20} />
                      <p className="text-sm text-green-700 font-medium">Enterprise Value (EV)</p>
                    </div>
                    <p className="text-3xl font-bold text-green-900">
                      {results.ev !== null ? formatCurrency(results.ev) : "N/A"}
                    </p>
                    <p className="text-xs text-green-700 mt-1">
                      Market Cap + Total Debt - Cash
                    </p>
                  </CardContent>
                </Card>

                {/* EV/Revenue Multiple */}
                <Card className="shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="text-purple-600" size={20} />
                      <p className="text-sm text-purple-700 font-medium">EV / Revenue Multiple</p>
                    </div>
                    <p className="text-3xl font-bold text-purple-900">
                      {formatMultiple(results.evRevenue)}
                    </p>
                    <p className="text-xs text-purple-700 mt-1">
                      Value per $1 of revenue
                    </p>
                  </CardContent>
                </Card>

                {/* EV/EBITDA Multiple */}
                <Card className="shadow-lg bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="text-orange-600" size={20} />
                      <p className="text-sm text-orange-700 font-medium">EV / EBITDA Multiple</p>
                    </div>
                    <p className="text-3xl font-bold text-orange-900">
                      {formatMultiple(results.evEbitda)}
                    </p>
                    <p className="text-xs text-orange-700 mt-1">
                      Value per $1 of EBITDA
                    </p>
                  </CardContent>
                </Card>
              </>
            )}

            {!hasCalculated && (
              <Card className="shadow-lg bg-slate-50 border-slate-200">
                <CardContent className="pt-6 text-center">
                  <p className="text-slate-600 text-sm">
                    Enter your financial metrics and click "Calculate" to see the results.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
