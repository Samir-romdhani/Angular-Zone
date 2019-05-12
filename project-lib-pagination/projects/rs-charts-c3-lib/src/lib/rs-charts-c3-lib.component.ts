import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'rs-charts-lib',
  template: `
    <div id="chart"></div>
  `,
  styles: [
    `
    `
  ]
})
export class RsChartsC3LibComponent implements OnInit, AfterViewInit {


  @Input() data1: any[] = ['data1', 30, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250];
  @Input() data2: any[] = ['data2', 50, 20, 10, 40, 15, 25, 50, 20, 10, 40, 15, 25]
  @Input() subchart: boolean = false;
  @Input() zoom: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let chart = c3.generate({
    bindto: '#chart',
        data: {
            columns: [
                this.data1,
                this.data2
            ],
            type: 'bar',
            groups: [
              [this.data1[0], this.data2[0]]
          ],
        },
        subchart: {
            show: this.subchart
        },
        grid: {
          x: {
              show: true
          },
          y: {
              show: true
          }
      },
      zoom: {
        enabled: this.zoom
    }
    });
}

}
