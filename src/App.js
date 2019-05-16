import React from 'react';
import Form from './components/Form';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    handelSubmit = (values) => {

        let x = values.number_rupiah.replace(/\D/g, '');

        let value = parseInt(x);

        let i, jml;

        var data = [
            100000,
            50000,
            20000,
            10000,
            5000,
            2000,
            1000,
            500,
            100,
            50
        ];
        let temp = value;
        var items = [];

        for (i = 0; i < data.length; i++) {
            jml = temp / data[i];
            temp = temp % data[i];

            // item = value + " = " + Math.floor(jml) + "X " + " Rp" + data[i];
            items.push({ i: i, nominal: data[i], jml: Math.floor(jml), temp: temp < 50 ? temp : "" });
            // items.push(item);

        }

        items = items.filter(({ jml: mjml }) => mjml > 0);

        console.log(items);

        items = items.map(i => {
            var values = [value + " = " + i.jml + "x Rp" + i.nominal + i.temp !== null ? "left Rp" + i.temp + " (no available fraction)" : ""];
            return values;
        })

        document.getElementById("demo").innerHTML = items.join("<br/ >");

    }

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <h3 className="jumbotron">Web Front-End Test</h3>
                <Form onSubmit={this.handelSubmit} />
                <p id="demo"></p>
            </div>

        )
    }
}

export default App;