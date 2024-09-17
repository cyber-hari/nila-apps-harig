import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from '../../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-students-attendance',
  templateUrl: './students-attendance.component.html',
  styleUrl: './students-attendance.component.scss'
})
export class StudentsAttendanceComponent implements OnInit, OnChanges {
  @Input() studentsAttendanceData: any;

  Highcharts = Highcharts;
  chartOptions!: Highcharts.Options

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['studentsAttendanceData'].currentValue) {
      this.prepareChart();
    }
  }

  prepareChart() {
    this.chartOptions = {
      chart: {
        type: 'line',
      },
      title: {
        text: "",
        style: {
          fontSize: '16px'
        }
      },
      xAxis: {
        categories: this.studentsAttendanceData?.weeks,
        title: {
          text: 'Weeks'
        }
      },
      yAxis: {
        tickPositions: [0, 25, 50, 75, 100],
        min: 0,
        max: 100,
        title: {
          text: 'Attendance'
        },
        labels: {
          format: '{value}%'
        }
      },
      series: [
        {
          name: 'Attendance',
          data: this.studentsAttendanceData?.values,
          type: 'line',
          color: '#8e44ad',
          dashStyle: 'Solid',
          marker: {
            enabled: true,
            radius: 2,
            fillColor: '#000',
            lineWidth: 2,
            lineColor: '#000'
          },
        }
      ],
      plotOptions: {
        series: {
          lineWidth: 1,
          marker: {
            symbol: 'circle'
          }
        }
      },
      credits: {
        enabled: false
      },
      accessibility: {
        enabled: false
      }
    };
  }
}
