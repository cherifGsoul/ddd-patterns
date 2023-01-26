export interface PasswordEncoder {
	encode(clearPassword: string): string
}