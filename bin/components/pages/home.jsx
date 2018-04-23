import React, { Component } from "react";
import "./home.scss";

import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
const ReactGridLayout = WidthProvider(RGL);

class HomePage extends Component {
    constructor(props){
        super(props);

        const layout = this.generateLayout();
        this.state = { layout };

        this.generateDOM = this.generateDOM.bind(this);
        this.generateLayout = this.generateLayout.bind(this);
        this.onLayoutChange = this.onLayoutChange.bind(this);
    }

    generateDOM() {
        return Array(this.props.items).fill().map((_,i)=>(
            <div key={i}>
              <span className="text">{i}</span>
            </div>
        ));
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
    }

    generateLayout() {
        const p = this.props;
        return Array(this.props.items).fill().map((_,i) => {
            const y = Math.ceil(Math.random() * 4) + 1;
            return {
                x: (i * 2) % 12,
                y: Math.floor(i / 6) * y,
                w: 2,
                h: y,
                i: i.toString()
            };
        });
    }

    render() {
        // {lg: layout1, md: layout2, ...}
        return (
            <div className="grid-container-css">
                <ReactGridLayout
                    layout={this.state.layout}
                    onLayoutChange={this.onLayoutChange}
                    {...this.props}>
                    {this.generateDOM()}
                </ReactGridLayout>
            </div>
        );
    }
}

HomePage.defaultProps = {
    className: "layout",
    items: 20,
    rowHeight: 30,
    onLayoutChange: function() {},
    cols: 12
}

export default HomePage;
