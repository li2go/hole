var message={
    ADD:{
        method: 'PUT',
        path: '/message/add/'
    },
    DEL:{
        method:'DELETE',
        path: '/message/del/:mid'
    },
    UPDATE:{
        method:'POST',
        path:'/message/update/:mid'
    },
    INFO:{
        method:'GET',
        path: '/message/:mid'
    }
};

export default message;