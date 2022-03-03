module.exports = {
    pages: {
        index: {
            entry: './src/main.ts',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'RAMP Storylines'
        },
        indexCanadaEn: {
            entry: './src/main.ts',
            template: 'public/index-ca-en.html',
            filename: 'index-ca-en.html',
            title: 'RAMP Storylines'
        },
        indexCanadaFr: {
            entry: './src/main.ts',
            template: 'public/index-ca-fr.html',
            filename: 'index-ca-fr.html',
            title: 'Scenarios de PCAR'
        }
    },
    devServer: {
        historyApiFallback: {
            //index: 'index-ca-en.html'
            verbose: true,
            rewrites: [
                {
                    from: /^\/en\/[^.]*$/,
                    to: '/index-ca-en.html'
                },
                {
                    from: /^\/fr\/[^.]*$/,
                    to: '/index-ca-fr.html'
                }
            ]
        }
    }
};
