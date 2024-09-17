import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from '../../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-assessment-progress',
  templateUrl: './assessment-progress.component.html',
  styleUrl: './assessment-progress.component.scss'
})
export class AssessmentProgressComponent implements OnInit, OnChanges {
  @Input() assessmentProgressData: any;

  Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['assessmentProgressData'].currentValue) {
      this.prepareChart();
    }
  }

  prepareChart() {
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: '',
      },
      xAxis: {
        categories: this.assessmentProgressData.categories,
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        max: 100,
        title: {
          text: '',
          align: 'high'
        },
        labels: {
          format: '{value}%'
        }
      },
      plotOptions: {
        column: {
          grouping: true,
          shadow: false,
          borderWidth: 0,
          borderRadius: 0,
          dataLabels: {
            enabled: false,
            format: '{point.y}%',
          }
        },
      },
      series: [
        {
          name: 'Pending',
          data: this.assessmentProgressData.pending,
          type: 'column',
          color: '#d3d3d3',
          pointPadding: 0.2,
          borderWidth: 0
        },
        {
          name: 'Completed',
          data: this.assessmentProgressData.completed,
          type: 'column',
          color: '#91b07c',
          pointPadding: 0.2,
          borderWidth: 0
        }
      ],
      credits: {
        enabled: false
      },
      accessibility: {
        enabled: false
      }
    };
  }

}
