module.exports = {
	presets: [
		// responsável por alterar os códigos js que os browsers não entendem. 
		"@babel/preset-env", 
		// responsável por traduzir o react para o browser
		"@babel/preset-react" 
	],
	plugins: [
		'@babel/plugin-proposal-class-properties'
	]

} 
