var rollup = require( 'rollup' );
var babel = require('rollup-plugin-babel');

rollup.rollup({
    // The bundle's starting point. This file will be
    // included, along with the minimum necessary code
    // from its dependencies
    entry: './src/main.js',
    plugins: [babel()]
}).then( function ( bundle ) {
    // Alternatively, let Rollup do it for you
    // (this returns a promise). This is much
    // easier if you're generating a sourcemap
    bundle.write({
        format: 'cjs',
        dest: './build/bundle.js'
    });
}).catch(function(error){
    console.log(error)
});