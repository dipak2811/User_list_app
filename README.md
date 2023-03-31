1. Steps to deploy react app on netlify for staging envirment

    1) First install env-cmd library using 
            npm install env-cmd --save 
    2) Add belowe lines in package.json in scripts and run npm run build:staging to create build
            "build:staging": "env-cmd -f .env.staging npm run build",
    3) Upload build folder on netlify in new site 
    4) If you are deploying through github repository then add Environment variables in /settings/env#environment-variables on netlify choose Import from          .env environment variables and belowe line,because .env is in gitignore so it won't be in repository.(If we depley via build folder it will take            those value autometically while creating build)
           
           REACT_APP_NODE_ENV = "staging"



Deployed Link for staging:- https://adorable-alfajores-cfa1e5.netlify.app/  
note:-check console to see var of staging env



2. Steps to deploy react app on netlify for production envirment

    1) First install env-cmd library using 
            npm install env-cmd --save 
    2) Add belowe lines in package.json in scripts and run npm run build:production to create build
            "build:production": "env-cmd -f .env.production npm run build",
    3) Upload build folder on netlify in new site then add Environment variables in /settings/env#environment-variables on netlify
    4) If you are deploying through github repository then add Environment variables in /settings/env#environment-variables on netlify choose Import from          .env environment variables and belowe line,because .env is in gitignore so it won't be in repository(If we depley via build folder it will take            those value autometically while creating build)
           
           REACT_APP_NODE_ENV = "production"



Deployed Link for production:- https://adorable-alfajores-cfa1e5.netlify.app/  
note:-check console to see var of production env



