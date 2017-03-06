
//fake photo locations for src, assumes photo.id = photo location in this array

const fakePhotos = (()=>{
	const rootDir="http://localhost:1337/img/s";
	const end=".jpg";
	const photos = [];

	for (let i=0; i<18; i++){
		(i<10) ? photos.push({source : rootDir+'0'+i+end } ) : photos.push({source :rootDir+i+end }) ;
	}

	return photos;
});

export default fakePhotos;
