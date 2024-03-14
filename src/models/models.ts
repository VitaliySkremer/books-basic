import { View } from "../common/view";

export interface IRoute {
	path: string,
	view: View
}

export interface IAppState {
	favorites: string[]
}