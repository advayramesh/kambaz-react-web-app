import { Link,useParams, useLocation } from "react-router-dom";
export default function CourseNavigation() {
  const { cid } = useParams();
  const {pathname} = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
      <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((label) => (
        <Link key={label} to={`/Kambaz/Courses/${cid}/${label}`} className={`list-group-item list-group-item-action ${pathname.includes(label) ? "active" : "text-danger"}`}>
          {label}
        </Link>
      ))}
      
    </div>
);}



