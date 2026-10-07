const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const chalk = require("chalk");

const argv = yargs(hideBin(process.argv))
    .option("city", {
        alias: "c",
        type: "string",
        description: "City to check the weather for",
        demandOption: true
    })
    .parse();

function getWeather(city) {
    const weatherData = {
        "new york": {
            temperature: 72,
            condition: "Sunny"
        },
        chicago: {
            temperature: 65,
            condition: "Windy"
        },
        "st. louis": {
            temperature: 78,
            condition: "Partly cloudy"
        }
    };

    const cityKey = city.toLowerCase();

    return (
        weatherData[cityKey] || {
            temperature: 70,
            condition: "Clear"
        }
    );
}

const weather = getWeather(argv.city);

console.log(chalk.bold.blue(`Weather for ${argv.city}`));
console.log(chalk.green(`Temperature: ${weather.temperature}°F`));
console.log(chalk.yellow(`Conditions: ${weather.condition}`));

/*
package.json records project information and lists the dependencies
needed by the application.

node_modules should not be committed because it can be very large
and its contents can be recreated from package.json and package-lock.json.

npm install reads package.json and downloads the required dependencies.
This allows collaborators to install the same project dependencies.*/