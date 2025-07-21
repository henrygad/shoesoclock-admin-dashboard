# ShoesO-clock - An E-Commeerce dashboard Ui 


## Developer Git Workflow Cheat Sheet

***Step 1: Clone dev repository (for the first time)***
git clone -b dev --single-branch https://github.com/henrygad/ShoesO-clock_admin_dashboard.git

***Step 2: Start from latest dev***
- git checkout dev
- git pull origin dev

***Step 3: Create a new feature branch***
- git checkout -b feature/your-feature-name

***Step 4: Work on your code (Edit files, test, commit)***
- git add .
- git commit -m "feature: describe your change"

***Step 5: Re-check the current branche***
- git branch 

***Step 6: Push to GitHub (for the first time)***
- git push -u origin feature/your-feature-name

***Step 6.1: Push to GitHub (on other times)***
- git push

***Open a Pull Request to dev branch***
- Go to GitHub repository
- Click on "Pull Requests"
- Click "New Pull Request"
- Select "dev" as base branch and your feature branch as compare branch
- Fill in the PR template:
- Title: Clear & short
- Description: What/Why/How
