console.log(process.argv.slice(2).reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0));

