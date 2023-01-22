import Course from "./course";
import CourseId from "./course-id";

export default interface Courses {
	nextIdentity(): CourseId;
	forTitle(title: string): Promise<Course>;
	persist(course: Course): Promise<void>;
}