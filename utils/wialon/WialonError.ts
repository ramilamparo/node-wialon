export class WialonError extends Error {
	public static getMessage(errorCode?: number): string {
		switch (errorCode) {
			case 1:
				return "Invalid session";
			case 2:
				return "Invalid service name";
			case 3:
				return "Invalid result";
			case 4:
				return "Invalid input";
			case 5:
				return "Error performing request";
			case 6:
				return "Unknown error";
			case 7:
				return "Access denied";
			case 8:
				return "Invalid user name or password";
			case 9:
				return "Authorization server is unavailable";
			case 10:
				return "Reached limit of concurrent requests";
			case 11:
				return "Password reset error";
			case 14:
				return "Billing error";
			case 1001:
				return "No  for selected interval";
			case 1002:
				return "Item with such unique property already exists";
			case 1003:
				return "Only one request is allowed at the moment";
			case 1004:
				return "Limit of  has been exceeded";
			case 1005:
				return "Execution time has exceeded the limit";
			case 1006:
				return "Exceeding the limit of attempts to enter a two-factor authorization code";
			case 1011:
				return "Your IP has changed or session has expired";
			case 2014:
				return "Selected user is a creator for some system objects";
			case 2015:
				return "Sensor deleting is forbidden because of using in another sensor or advanced properties of the unit";
			default:
				return "Unknown error";
		}
	}
	constructor(error: RemoteAPIError) {
		super(WialonError.getMessage(error.error));
	}
}

export interface RemoteAPIError {
	error?: number;
}
