var article={
    ADD:{
        method: 'PUT',
        path: '/article/add/'
    },
    DEL:{
        method:'DELETE',
        path: '/article/del/:aid'
    },
    UPDATE:{
        method:'POST',
        path:'/article/update/:aid'
    },
    INFO:{
        method:'GET',
        path: '/article/:aid'
    }
};

export default article;