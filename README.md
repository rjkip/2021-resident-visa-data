# 🇳🇿 2021 New Zealand Resident Visa data

## Data

The 2021 Resident Visa processing times data is updated automatically from
[Immigration New Zealand’s numbers](https://www.immigration.govt.nz/new-zealand-visas/waiting-for-a-visa/how-long-it-takes-to-process-your-visa-application/2021-resident-visa-processing-times).

To pull in the latest updates, run `./update-numbers.bash`, or copy the missing
rows from the HTML table to the top of the template string in
[`src/lib/data/processing-data.js`](src/lib/data/processing-data.js).

Confirm the data is interpreted properly by running the application and
inspecting its output.

## Installation/usage

```sh-session
$ npm install
$ npm run dev
```

Visit http://localhost:3000.

## Contributing

Feel free to! Please run `npx prettier --write .` before committing.
