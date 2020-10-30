import { storage } from "firebase/app";
import "firebase/storage";
import { store } from "../../modules";
import { setProfilePic } from "../../modules/userInfo";

function setUserProfilePic(url) {
    store.dispatch(setProfilePic(url));
}

function getUserId() {
    return store.getState().userInfo.id;
}

function getUserProfilePic() {
    return store.getState().userInfo.profilePic;
}

/**
 * @description 프로필 사진의 경로를 전달받아 Firebase Storage에 업로드합니다
 * @param {string} imagePath 업로드할 이미지의 경로를 전달합니다
 * @return {boolean} 프로필 사진의 업로드 성공 여부를 true, false로 전달합니다
 */
export async function uploadProfilePicture(imagePath) {
    // If imagePath exist, save image to firebase Storage
    if (imagePath) {
        // Get UserId from Redux for Reference Naming
        const userId = getUserId();

        // Create Reference on Firebase Storage
        // Reference refers actual store path on Firebase Storage
        console.log(`/profilePic/omaju_${userId}/0.png`);
        const reference = storage().ref(`/profilePic/omaju_${userId}/0.png`);

        // Upload File to Firebase Storage
        const result = reference
            .putString(imagePath)
            .then((res) => {
                if (res.state === "success") {
                    loadProfilePicture(userId);
                    return true;
                }
                return false;
            })
            .catch((err) => {
                return false;
            });

        return result;
    }

    // If imagePath doesn't exist, store empty string
    setUserProfilePic("");
    return true;
}

/**
 * @description 유저ID를 전달받아 해당 유저의 프로필 사진의 URL을 Redux에 저장합니다.
 * @param {string} userId 프로필 사진을 가져올 유저의 id를 전달합니다
 */
export async function loadProfilePicture(userId: string) {
    try {
        const url = await storage()
            .ref(`/profilePic/omaju_${userId}/0.jpg`)
            .getDownloadURL();
        setUserProfilePic(url);
    } catch {
        // If error exist, this user has no Profile Picture
        // set userInfo_profilePic empty string
        setUserProfilePic("");
    }
}

/**
 * @description Firebase Storage에 업로드 되어있는 프로필사진을 삭제합니다
 * @return {boolean} 프로필 사진의 삭제 성공 여부를 true, false로 전달합니다
 */
export async function removeProfilePicture() {
    // Get ProfilePic url from Redux to check it exists
    const profilePic = getUserProfilePic;

    if (profilePic) {
        // If profilePic exist, get userId from Redux
        // And Execute Picture Remove
        const userId = getUserId();
        await storage()
            .ref(`/profilePic/omaju_${userId}/0.jpg`)
            .delete()
            .then((res) => {
                return true;
            })
            .catch((err) => {
                return false;
            });
    }
}
