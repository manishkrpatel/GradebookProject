import React, { } from 'react'
import mockdata from '../data.json'
import Chart from 'react-apexcharts'
import './CSS/statistics.css'
function Statistics() {
  let total = mockdata.length;
  let p1 = mockdata.filter((student) => {
    return (0.6 * (student.examGrade) + 0.4 * (student.ratingGrade)).toFixed(2) > 4;

  })
  let fail = mockdata.filter((student) => {
    return (0.6 * (student.examGrade) + 0.4 * (student.ratingGrade)).toFixed(2) < 4;

  })

  let finalG = mockdata.map((student) => {
    return (0.6 * (student.examGrade) + 0.4 * (student.ratingGrade)).toFixed(2);
  })

  let totalfinal = finalG.reduce((a, b) => {
    return (Number(a) + Number(b))
  })
  let passed = p1.length;
  let failed = fail.length;
  let avg = (totalfinal / total).toFixed(2);


  let max = Math.max(...finalG);

  let min = Math.min(...finalG);

  let f1 = finalG.filter((grade) => {
    return (grade <= 4)
  })

  let f2 = finalG.filter((grade) => {
    return (grade > 4 && grade <= 7)
  })

  let f3 = finalG.filter((grade) => {
    return (grade > 7 && grade <= 10)
  })

  let zero_4 = f1.length;
  let four_7 = f2.length;
  let seven_10 = f3.length;

  return (
    <>
      <div className='stats'>
        <table className='statisticsTable'>
          <thead>
            <tr>
              <th>Status</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Students</td>
              <td>{total}</td>
            </tr>
            <tr>
              <td>Total Passed</td>
              <td>{passed}</td>
            </tr>
            <tr>
              <td>Total Failed</td>
              <td>{failed}</td>
            </tr>
            <tr>
              <td>Average of All</td>
              <td>{avg}</td>
            </tr>
            <tr>
              <td>Max Grade of All</td>
              <td>{max}</td>
            </tr>
            <tr>
              <td>Min Grade of All</td>
              <td>{min}</td>
            </tr>
            <tr>
              <td>Final Grade 0-4</td>
              <td>{zero_4}</td>
            </tr>
            <tr>
              <td>Final Grade 4-7</td>
              <td>{four_7}</td>
            </tr>
            <tr>
              <td>Final Grade 7-10</td>
              <td>{seven_10}</td>
            </tr>
          </tbody>
        </table>
        <div className='studentchart'>
          <Chart type='bar'
            width={300}
            height={300}
            series={[
              {
                name: "Students",
                data: [total, passed, failed],
                style: { colors: ["#f90000", "#a90000", "#d90000"] }
              }
            ]}
            options={{
              chart: {
                type: 'bar'
              },
              xaxis: {
                categories: ["Total Students", "Total Passed", "Total Failed"],
                title: {
                  text: "Status",
                  style: { color: "#f90000", fontSize: 20 }
                }
              },
              yaxis: {
                labels: {
                  style: { colors: "#f90000" }
                },
                title: {
                  text: "Students",
                  style: { color: "#f90000" }
                }
              }
            }}
          >
          </Chart>
        </div>
        <div className='barchat'>
          <Chart type='bar'
            width={200}
            height={300}
            series={[
              {
                name: "Students",
                data: [min, max, avg],
              }
            ]}
            options={{
              chart: {
                type: 'bar'
              },
              xaxis: {
                categories: ["Min. Grade", "Max. Grade", "avg Grade"],
                title: {
                  text: "Status",
                  style: { color: "#f90000", fontSize: 20 }
                }
              },
              yaxis: {
                labels: {
                  style: { colors: "#f90000" }
                },
                title: {
                  text: "Grade",
                  style: { color: "#f90000" }
                }
              }
            }}
          >
          </Chart>
        </div>
      </div>
    </>
  )
}
export default Statistics
