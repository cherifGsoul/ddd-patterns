import Courses from "../domain/courses";
import { CourseView } from "./course-view";

export default class CoursesList {
	#courses: Courses

	constructor(courses: Courses) {
		this.#courses = courses;
	}

	public async getCourseByTitle(title: string): Promise<CourseView> {
		try {
			const course = await this.#courses.forTitle(title)
			return {
				title: course.title,
				isViable: course.isViable(),
				acceptEnrolments: course.acceptEnrolments()
			} as CourseView
		} catch (error: any) {
			// todo replace with custom error
			throw new Error(error.message);
		}
		
	}
}