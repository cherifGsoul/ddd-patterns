import CourseId from "../../../domain/course-id";
import Courses from "../../../domain/courses";
import {v4} from 'uuid'
import Course from "../../../domain/course";

export default class InMemoryCourses implements Courses {
	#courses: Map<string, Course> = new Map()

	public nextIdentity(): CourseId {
		return CourseId.fromString(v4())
	}

	public async forTitle(title: string): Promise<Course> {
		let found: Course | null = null
		this.#courses.forEach(course => {
			if (course.title === title) {
				found = course
			}
		})
		if (!found) {
			throw new Error('Course can not be found!');
		}
		return found;
	}

	public async persist(course: Course): Promise<void> {
		this.#courses.set(course.id.toString(), course);
	}
}