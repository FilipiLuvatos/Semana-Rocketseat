module.exports = {
    entry: ['@babel/polyfill','/html.js'],// entry - ele diz qual é o arquivo principal 
    output:{ // Para qual lugar devmos mandar o arquivo 
        path: __dirname,
        filename: 'bundles.js', 

    },
    devServer:{
        contentBase: __dirname + '/public'

    },
    module:{
        rules:[// Aqui diz como o 'webpack deve se comportar quando o usuario 
        // estiver tentando importar novos arquivo js
        {
            test: /\.js$/,//Esotu buscando se o arquivo termina em '.js'
            //$=final,\=qualquer caracter e //=Expressão regular
            exclude:/node_modules/,
            use: {
                loader :'babel-loader',
            }
        }

        ],
    }

    
};


//Para executar o 'webpack' vá em packjson e troque:
// "scripts":{
//      "dev": "webpack --rode=developnent -w"
//}