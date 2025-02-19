import React from "react";
import "./Projects.css";
import myImage from "../images/construction-img.png";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {/* Project 1 */}
        <div className="project-card">
          <a
            href="http://portfolios.ecti.co.in/rushikeshr/projects/car-repair/index.html"
            target="_blank"
          >
            <img
              src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Chat Application"
            />

            <div className="project-info">
              <h3>Car Repair Shop Portfolio</h3>
              <p>A portfolio website that will give overview of the shop.</p>
            </div>
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <a
            href="http://portfolios.ecti.co.in/rushikeshr/projects/gym/index.html"
            target="_blank"
          >
            <img
              src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Gym Portfolio"
            />

            <div className="project-info">
              <h3>Gym Portfolio Website</h3>
              <p>
                A full-fledged Gym portfolio website that shows the gyms
                overview
              </p>
            </div>
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <a
            href="http://portfolios.ecti.co.in/rushikeshr/projects/cycle/index.html"
            target="_blank"
          >
            <img
              src="https://images.pexels.com/photos/10200533/pexels-photo-10200533.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Cycle Shop"
            />

            <div className="project-info">
              <h3>Cycle Ecommerce Shop</h3>
              <p>A cycle ecommerce website that allow to buy cycle online</p>
            </div>
          </a>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <a
            href="http://portfolios.ecti.co.in/rushikeshr/projects/ecommerce/index.html"
            target="_blank"
          >
            <img
              src="https://images.pexels.com/photos/2908975/pexels-photo-2908975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Shoes Shop"
            />

            <div className="project-info">
              <h3>Shoes Shop</h3>
              <p>
                Shoes website that allows customer to see new offers and sale
                for shows
              </p>
            </div>
          </a>
        </div>

        {/* Project 5 */}
        <div className="project-card">
          <a
            href="http://portfolios.ecti.co.in/rushikeshr/projects/game/index.html"
            target="blank"
          >
            <img
              src="https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Football Team"
            />

            <div className="project-info">
              <h3>Football Team Portfolio Website</h3>
              <p>
                A Football team portfolio website that allows to portarate the
                achievements of a football team
              </p>
            </div>
          </a>
        </div>
        {/* Project 6 */}
        <div className="project-card">
          <a
            href="http://portfolios.ecti.co.in/rushikeshr/projects/game/index.html"
            target="blank"
          >
            <img src={myImage} alt="construction project" />

            <div className="project-info">
              <h3>Construction Companies Portfolio Website</h3>
              <p>
                A Construction cpmpannies demo site with which a company can
                porterate ite offering to he customers.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
