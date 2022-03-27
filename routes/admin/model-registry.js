const News = require('../../data/models/news');
const PressRelease = require('../../data/models/press-release');
const ImageGallery = require('../../data/models/image-gallery');
const VideoGallery = require('../../data/models/video-gallery');
const Banner = require('../../data/models/banner');
const QuickLink = require('../../data/models/quick-links');
const Announcement = require('../../data/models/announcement');
const ContactUs = require('../../data/models/contact-us');
const Subscriptions = require('../../data/models/subscriptions');

const models = {
    'news': {
        api: '/api/news',
        model: News,
        headline: 'headline',
        date: 'date',
        format: {
            fields: [
                {
                    type: 'date',
                    name: 'date',
                    verbose_name: 'date'
                },
                {
                    type: 'text',
                    name: 'headline',
                    verbose_name: 'headline'
                },
                {
                    type: 'text',
                    name: 'content',
                    verbose_name: 'content',
                    input: 'textarea'
                },
                {
                    type: 'text',
                    name: 'source',
                    verbose_name: 'source'
                },
                {
                    type: 'link',
                    name: 'url',
                    verbose_name: 'URL'
                },
            ]
        }
    },
    'press-release': {
        api: '/api/press-release',
        model: PressRelease,
        headline: 'content',
        date: 'date',
        format: {
            fields: [
                {
                    type: 'date',
                    name: 'date',
                    verbose_name: 'date'
                },
                {
                    type: 'text',
                    name: 'content',
                    verbose_name: 'content',
                    input: 'textarea'
                },
                {
                    type: 'link',
                    name: 'url',
                    verbose_name: 'URL'
                },
            ]
        }
    },
    'image-gallery': {
        api: '/api/image-gallery',
        model: ImageGallery,
        headline: 'name',
        date: 'date',
        format: {
            fields: [
                {
                    type: 'image-src',
                    name: 'cover',
                    verbose_name: 'cover image'
                },
                {
                    type: 'date',
                    name: 'date',
                    verbose_name: 'date'
                },
                {
                    type: 'text',
                    name: 'name',
                    verbose_name: 'name'
                },
                {
                    type: 'array',
                    name: 'images',
                    verbose_name: 'images',
                    field: {
                        type: 'image-src',
                        name: 'image',
                        verbose_name: 'image'
                    }
                },
            ]
        }
    },
    'video-gallery': {
        api: '/api/video-gallery',
        model: VideoGallery,
        headline: 'title',
        date: 'createdAt',
        format: {
            fields: [
                {
                    type: 'text',
                    name: 'title',
                    verbose_name: 'title'
                },
                {
                    type: 'link',
                    name: 'video_url',
                    verbose_name: 'Video URL'
                },
            ]
        }
    },
    'banners': {
        api: '/api/banner',
        model: Banner,
        headline: 'title',
        date: 'createdAt',
        format: {
            fields: [
                {
                    type: 'text',
                    name: 'title',
                    verbose_name: 'title'
                },
                {
                    type: 'link',
                    name: 'image_url',
                    verbose_name: 'Image URL'
                },
                {
                    type: 'text',
                    name: 'summary',
                    verbose_name: 'summary',
                    input: 'textarea'
                },
                {
                    type: 'link',
                    name: 'url',
                    verbose_name: 'URL'
                },
                {
                    type: 'text',
                    name: 'url_text',
                    verbose_name: 'URL text'
                },
            ]
        }
    },
    'quick-links': {
        api: '/api/quick-links',
        model: QuickLink,
        headline: 'title',
        date: 'createdAt',
        format: {
            fields: [
                {
                    type: 'text',
                    name: 'title',
                    verbose_name: 'title'
                },
                {
                    type: 'link',
                    name: 'url',
                    verbose_name: 'URL'
                }
            ]
        }
    },
    'announcements': {
        api: '/api/announcement',
        model: Announcement,
        headline: 'title',
        date: 'createdAt',
        format: {
            fields: [
                {
                   type: 'text',
                   name: 'title' ,
                   verbose_name: 'title' 
                },
                {
                    type: 'link',
                    name: 'url',
                    verbose_name: 'URL'
                }
            ]
        }
    },
    'contact-us': {
        api: '/api/contact-us',
        model: ContactUs,
        headline: 'email',
        date: 'createdAt',
        format: {
            fields: [
                {
                    type: 'text',
                    name: 'email',
                    verbose_name: 'Email'
                },
                {
                    type: 'text',
                    name: 'first_name',
                    verbose_name: 'First name'
                },
                {
                    type: 'text',
                    name: 'last_name',
                    verbose_name: 'Last Name'
                },
                {
                    type: 'text',
                    name: 'phone_number',
                    verbose_name: 'Phone Number'
                },
                {
                    type: 'text',
                    name: 'message',
                    verbose_name: 'message',
                    input: 'textarea'
                }
            ]
        }
    },
    'subscriptions': {
        api: '/api/subscriptions',
        model: Subscriptions,
        headline: 'email',
        date: 'createdAt',
        format: {
            fields: [
                {
                    type: 'text',
                    name: 'email',
                    verbose_name: 'email'
                }
            ]
        }
    }
};

exports.models = models;
