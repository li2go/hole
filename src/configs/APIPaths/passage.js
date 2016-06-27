var passage={
    ADD:{
        method: 'PUT',
        path: '/passage/add/'
    },
    DEL:{
        method:'DELETE',
        path: '/passage/del/:pid'
    },
    UPDATE:{
        method:'POST',
        path:'/passage/update/:pid'
    },
    INFO:{
        method:'GET',
        path: '/passage/:pid'
    }
};

export default passage;