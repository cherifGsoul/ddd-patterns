import Course from "./course";

export default interface Courses {
	forTitle(title: string): Promise<Course>;
	persist(course: Course): Promise<void>;
}