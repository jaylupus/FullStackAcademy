juke.config(function($stateProvider) {
    $stateProvider.state('albumList', {
        url: '/albums',
        templateUrl: '/partials/albums.html',
        resolve: {
            albums: function(AlbumFactory) {
                return AlbumFactory.fetchAll();
            }
        },
        controller: 'AlbumsCtrl'
    });
});

juke.config(function($stateProvider) {
    $stateProvider.state('album', {
        url: '/albums/:id',
        templateUrl: '/partials/album.html',
        resolve: {
            singleAlbum: function(AlbumFactory, $stateParams) {
                return AlbumFactory.fetchById($stateParams.id);
            }
        },
        controller: 'AlbumCtrl'
    });
});