var music={
    ADD:{
        method: 'PUT',
        path: '/music/add/'
    },
    DEL:{
        method:'DELETE',
        path: '/music/del/:mid'
    },
    UPDATE:{
        method:'POST',
        path:'/music/update/:mid'
    },
    INFO:{
        method:'GET',
        path: '/music/:mid'
    }
};

export default music;