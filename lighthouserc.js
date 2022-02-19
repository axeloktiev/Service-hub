const fs = require('fs');
const path = require('path');

const getListOfRouts = function () {
    try {
        const routs = [];
        const files = fs.readdirSync(path.join(__dirname, 'pages'));

        for (const file  of files) {
            if (['.tsx', '.ts'].includes(path.extname(file)) && file[0] !== '_') {
                const name = path.parse(file).name;
                if (name !== 'index') routs.push(name);
            }
        }

        return routs;
    } catch (error) {
        console.log(error)
    }
};

const baseUrl = 'http://localhost:3000/';
const urls = [baseUrl, ...getListOfRouts().map(item => baseUrl + item)];

module.exports = {
        ci: {
            collect: {
                startServerCommand: 'npm run start',
                url: urls,
            },
            assert: {
                assertions: {
                    'categories:accessibility': [
                        'warn',
                        {
                            minScore: 0.9,
                        },
                    ],
                    'categories:best-practices': [
                        'warn',
                        {
                            minScore: 0.9,
                        },
                    ],
                    'categories:performance': [
                        'warn',
                        {
                            minScore: 0.9,
                        },
                    ],
                    'categories:seo': [
                        'warn',
                        {
                            minScore: 0.9,
                        },
                    ],
                },
            },
            upload: {
                target: 'temporary-public-storage',
            },
        },
    };