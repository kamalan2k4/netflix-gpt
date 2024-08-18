export const LOGO ='https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg';
export const USER_P = "https://cdn.vectorstock.com/i/1000v/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.avif";


export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjRmYjdmMjEwOTk4Zjk2ZDUwMTYxZjVhMzQ2ZTY1MSIsIm5iZiI6MTcyMTMwMzU4Ni4zMjQ4NjksInN1YiI6IjY2OTkwMDY3NjIxZDIwZTBlN2JmZDNiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EIlgF4cOvr6yEyXvbGtY5eVY1LAHlsamPosVPUKydpo'
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY.trim(),
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
  export const IMG = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

  export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  
  { identifier: "en", name: "English" },
  { identifier: "tamil", name: "Tamil" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },


];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;