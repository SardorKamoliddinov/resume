import React from "react";
import { Bar } from "react-chartjs-2";
import "./Skills.css";
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
ChartJS.register(BarElement, LinearScale, Tooltip, Legend, CategoryScale);

const Skills = () => {
  const data = {
    labels: [
      "HTML",
      "CSS",
      "Tailwind Css",
      "Bootstrap",
      "Uitkit",
      "Javascript",
      "React JS",
      "Chart JS",
      "Material UI",
      "Antd UI",
      "Chakra UI",
      "Git",
    ],
    datasets: [
      {
        label: "My skills here",
        data: [100, 90, 90, 80, 70, 80, 80, 80, 90, 90, 90, 90],
        backgroundColor: "white",
      },
    ],
  };
  const options = {
    indexAxis: "y",
  };
  return (
    <div>
      <div className="skills" id="skills">
        <div className="skill">
          <div className="txt">
            <h1>SKILLS</h1>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind Css</li>
                <li>Bootstrap</li>
                <li>Uitkit</li>
                <li>Javascript</li>
                <li>React JS</li>
                <li>Chart JS</li>
                <li>Material UI</li>
                <li>Antd UI</li>
                <li>Chakra UI</li>
                <li>Git</li>
                <li>Next JS</li>
            </ul>
          </div>
          <div className="chart">
            <Bar data={data} options={options}></Bar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
