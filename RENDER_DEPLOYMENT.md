# Deployment Instructions for Render.com

This guide provides step-by-step instructions to deploy the **Manus EV Calculator** application on Render.com.

## Prerequisites

Before you begin, ensure you have:

1. A Render.com account (sign up at https://render.com if you don't have one)
2. Your GitHub repository linked to your Render.com account
3. The GitHub repository URL: `https://github.com/abvirkar-svg/manus-ev-calculator.git`

## Step 1: Connect Your GitHub Account to Render.com

1. Log in to your Render.com dashboard at https://dashboard.render.com
2. Click on **Account Settings** in the left sidebar
3. Navigate to the **GitHub** tab
4. Click **Connect GitHub Account** and authorize Render.com to access your repositories
5. After authorization, your GitHub account will be linked to Render.com

## Step 2: Create a New Static Site on Render.com

1. In the Render.com dashboard, click the **New +** button in the top right corner
2. Select **Static Site** from the dropdown menu
3. You will be prompted to select a repository. Choose **manus-ev-calculator** from your GitHub repositories
4. Click **Connect** to proceed

## Step 3: Configure the Deployment Settings

On the deployment configuration page, enter the following settings:

| Setting | Value |
| --- | --- |
| **Name** | `manus-ev-calculator` (or any name you prefer) |
| **Branch** | `master` |
| **Build Command** | `pnpm install && pnpm build` |
| **Publish Directory** | `client/dist` |

**Explanation:**
- **Build Command:** Installs dependencies using pnpm and builds the production-ready application
- **Publish Directory:** Points to the compiled output directory where the static files are generated

## Step 4: Deploy the Application

1. After entering the configuration settings, click the **Create Static Site** button
2. Render.com will automatically start the build process
3. You can monitor the build progress in the **Logs** section of your deployment dashboard
4. Once the build completes successfully, your application will be live at a URL like: `https://manus-ev-calculator.onrender.com`

## Step 5: Access Your Deployed Application

Once the deployment is complete:

1. Navigate to your Render.com dashboard
2. Click on your **manus-ev-calculator** project
3. You will see a URL at the top of the page (e.g., `https://manus-ev-calculator.onrender.com`)
4. Click the URL to open your live application in a browser

## Step 6: Custom Domain (Optional)

If you want to use a custom domain instead of the default Render.com domain:

1. In your project dashboard, click **Settings** in the left sidebar
2. Scroll down to the **Custom Domain** section
3. Enter your custom domain name (e.g., `ev-calculator.yourdomain.com`)
4. Follow the DNS configuration instructions provided by Render.com
5. Point your domain's DNS records to Render.com as instructed

## Step 7: Enable Auto-Deploy (Optional)

By default, Render.com will automatically redeploy your application whenever you push changes to the `master` branch on GitHub. This is already enabled, so any future updates to your code will be automatically deployed.

To verify auto-deploy is enabled:

1. Go to your project's **Settings** page
2. Look for the **Auto-Deploy** section
3. Ensure it is set to **Yes** for automatic deployments on every push

## Troubleshooting

### Build Fails with Dependency Errors

**Solution:** Ensure that `pnpm` is being used. If the build fails, try clearing the build cache:

1. Go to your project's **Settings**
2. Click **Clear Build Cache**
3. Trigger a new deployment by pushing a commit to GitHub or manually redeploying

### Application Shows Blank Page or 404 Error

**Solution:** Verify that the **Publish Directory** is set to `client/dist`. This is the directory where the compiled static files are located.

### Environment Variables (If Needed in Future)

If you need to add environment variables in the future:

1. Go to your project's **Settings**
2. Scroll to the **Environment** section
3. Add your environment variables as key-value pairs
4. Redeploy your application

## Monitoring and Logs

To view deployment logs and monitor your application:

1. In your project dashboard, click the **Logs** tab
2. You can view build logs, runtime logs, and deployment history
3. Use these logs to troubleshoot any issues

## Updating Your Application

To update your deployed application:

1. Make changes to your code in your local repository
2. Commit and push your changes to the `master` branch on GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin master
   ```
3. Render.com will automatically detect the changes and redeploy your application
4. Your live application will be updated within a few minutes

## Support

For additional help with Render.com:

- Visit the Render.com documentation: https://render.com/docs
- Check the Render.com community: https://render.com/community
- Contact Render.com support: https://render.com/support

---

**Your application is now ready for deployment on Render.com!**
