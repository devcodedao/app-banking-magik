import React, { Component } from 'react';
import './index'
class GoogleMap extends Component {
    render() {
        return (
            <section id="main-content">
            <section class="wrapper site-min-height">
              <div class="row mt">
                <div class="col-sm-12">
                  <section class="panel">
                    <header class="panel-heading">
                      Google Map with Loaction List
                    </header>
                    <div class="panel-body">
                      <div id="gmap-list"></div>
                    </div>
                  </section>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <section class="panel">
                    <header class="panel-heading">
                      Google Map with Tab Location
                    </header>
                    <div class="panel-body">
                      <div id="controls-tabs"></div>
                      <div id="info"></div>
                      <div id="gmap-tabs"></div>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </section>
        );
    }
}

export default GoogleMap;