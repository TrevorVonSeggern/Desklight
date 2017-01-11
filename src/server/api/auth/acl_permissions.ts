/**
 * Created by trevor on 7/22/2016.
 */

export const Roles = {
	admin: 'Administrator',
	user: 'User',
	guest: 'Guest'
};

export const Permissions = [
	{role: Roles.admin, url: 'api', type: 'get'},
	{role: Roles.user, url: 'api', type: 'get'},

	{role: Roles.admin, url: 'api/logs', type: 'get'},

	{role: Roles.admin, url: 'api/user/ChangePassword', type: 'put'},
	{role: Roles.user, url: 'api/user/ChangePassword', type: 'put'},
	{role: Roles.guest, url: 'api/user/ChangePassword', type: 'put'},

	{role: Roles.admin, url: 'api/user/ChangePassword/:*:', type: 'put'},

	{role: Roles.admin, url: 'api/user/size', type: 'get'},
	{role: Roles.admin, url: 'api/user/:*:', type: 'get'},
	{role: Roles.admin, url: 'api/user/:*:', type: 'delete'},
	{role: Roles.admin, url: 'api/user', type: 'get'},
	{role: Roles.admin, url: 'api/user', type: 'put'},
	{role: Roles.admin, url: 'api/user', type: 'post'},


	{role: Roles.admin, url: 'api/light', type: 'get'},
	{role: Roles.admin, url: 'api/light/red', type: 'put'},
	{role: Roles.admin, url: 'api/light/green', type: 'put'},
	{role: Roles.admin, url: 'api/light/blue', type: 'put'},
	{role: Roles.admin, url: 'api/light/on', type: 'put'},
	{role: Roles.admin, url: 'api/light/off', type: 'put'},
	{role: Roles.admin, url: 'api/light/set', type: 'put'},
	{role: Roles.admin, url: 'api/light/reset', type: 'put'},
];
