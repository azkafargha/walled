import images from "../assets/34.jpg";

function Profile () {

    return (
        <div className="flex items-center py-4 px-8">
            <div className="py-8">
            <p className="text-black font-bold text-xl py-0 px-9">Siti Nur Lathifah</p>
            <p className="text-black text-xl py-0 px-9">Personal Account</p>
            </div>
          <img className="flex items-right rounded-full w-20 h-20 aspect-square object-cover hover:ring-8 hover:ring-blue-500 transition-all duration-300" src={images}/>
        </div>
    );
  }
  
  export default Profile;