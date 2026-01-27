import { useState, useEffect } from "react";
import styles from "./play.module.css";
import Subheader from "../ProjectPage/Subheader/subheader";


const projects = [
  {
    id: 1,
    image: "assets/play/kuu.png",
    label: "Kuu: Experience Design Project",
    description: "An illustrated book concept for a mindful dish discovery experience",
    content: "assets/play/kuufull.png",

  },
  {
    id: 2,
    image: "assets/play/art.png",
    label: "Digital Illustrations",
    description: "Procreate & Photoshop illustrations. Photo studies, fan art, and more",
    content: "assets/play/drawings.png"
  },
  {
    id: 3,
    image: "assets/play/photo.png",
    label: "Photography",
    description: "Capturing details of my surroundings: food, nature, and everyday moments",
    content: "assets/play/pics.png"

  },
  {
    id: 4,
    image: "assets/play/brand.png",
    label: "Brand Books",
    description: "As design lead for Sarge and SearchNEU, I designed and printed brand books for project showcases",
    content: "assets/play/brandbooks.png"

  },
  {
    id: 5,
    image: "assets/play/win.gif",
    label: "Bakery Minigame",
    description: "A bakery-themed minigame prototype built in Processing, with Java. Assets illustrated with Procreate.",
    content: "assets/play/winfull.gif",
    scale: 0.8
    

  }
];

function ProjectItem({ image, label, thumbScale = 1.1, scale = 1, onClick }) {
  return (
    <div className={styles.item} onClick={onClick} style={{ "--thumb-scale": thumbScale }}>
      <img src={image} alt={label} />
      <div className={styles.chip}>{label}</div>
    </div>
  );
}

function Modal({ project, onClose }) {
    if (!project) return null;

    
  
    return (
      <div className={styles.backdrop} onClick={onClose}>
        <div
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Fixed header */}

          <div className={styles.modalHeader}>          
            <h2>{project.label}</h2>
            <p>{project.description}</p>
  
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
  
          {/* Scrollable content */}
          <div className={styles.modalBody}>
            
            <img src={project.content} alt={project.label} />
            
            {/* add more content here later */}
          </div>
        </div>
      </div>
    );
  }
  

export default function Play() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);
  

  return (
    <>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            image={project.image}
            label={project.label}
            thumbScale={project.thumbScale}
            onClick={() => setActiveProject(project)}
          />
        ))}
      </div>

      <Modal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
