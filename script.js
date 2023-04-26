let activeBtn = 0;
let screenButtons;

let allUsers;

let mainScreens, homeScreen, morePeopleScreen, chatScreen;
let activeScreen;
let allScreensInMainScreen = [];

window.onload = () => {
	screenButtons = document.querySelectorAll('.nav-btn-container');
	allUsers = document.querySelectorAll('.message-container');
	screenButtons.forEach((btn, index) => {
		btn.addEventListener('click', () => {
			toggleScreens(index);
			renderScreens(index);
		});
	});
	allUsers.forEach((user, index) => {
		user.addEventListener('click', () => {
			openChat();
		});
	});
	mainScreens = document.querySelector("#main-screens");
	homeScreen = document.querySelector("#home-screen");
	morePeopleScreen = document.querySelector("#add-more-people-screen");
	chatScreen = document.querySelector("#chat-screen");
	cameraScreen = document.querySelector('#camera-screen');
	userProfileScreen = document.querySelector('#user-profile-screen');
	activeScreen = homeScreen;
	allScreensInMainScreen = [homeScreen, morePeopleScreen, cameraScreen];
}

const toggleScreens = makeActive => {
	screenButtons[activeBtn].classList.remove('active');
	screenButtons[makeActive].classList.add('active');
	activeBtn = makeActive;
}

const renderScreens = screenToRender => {
	activeScreen.style.display = "none";
	console.log(activeScreen);
	allScreensInMainScreen[screenToRender].style.display = "block";
	activeScreen = allScreensInMainScreen[screenToRender];
}

const openChat = () => {
	mainScreens.style.display = "none";
	chatScreen.style.display = "block";
}

const goBack = () => {
	chatScreen.style.display = "none";
	mainScreens.style.display = "block";
}

const profileBack = () =>{
	userProfileScreen.style.display = "none";
	mainScreens.style.display = "block";
}

const openProfile = () => {
	mainScreens.style.display = "none";
	userProfileScreen.style.display = "block";
}