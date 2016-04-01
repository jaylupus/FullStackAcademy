juke.config(function($stateProvider) {
    $stateProvider.state('artistList', {
        url: '/artists',
        templateUrl: '/partials/artists.html',
        resolve: {
            artists: function(ArtistFactory) {
                return ArtistFactory.fetchAll();
            }
        },
        controller: 'ArtistsCtrl'
    });
});

juke.config(function($stateProvider) {
    $stateProvider.state('artist', {
            url: '/artists/:id',
            templateUrl: '/partials/artist.html',
            resolve: {
                artist: function(ArtistFactory, $stateParams) {
                    return ArtistFactory.fetchById($stateParams.id);
                }
            },
            controller: 'ArtistCtrl'
        })
        .state('artist.albums', {
            url: '/albums',
            templateUrl: '/partials/albumsbyartist.html'
        })
        .state('artist.songs', {
            url: '/songs',
            templateUrl: '/partials/songsbyartist.html'
        });
});