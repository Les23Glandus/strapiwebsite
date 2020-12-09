'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {


    sum: async ctx => {
        let entities;
        entities = await strapi.components['liste.realisation'].fetchAll();
        
        let out = {
            "count":entities.length,
        }
        entities = entities.map(entity => sanitizeEntity(entity, { model: strapi.models.escape }));
  
        entities.map(entry => {
            Object.entries(entry).map( k => {
                if( k[0] != "id" ) {
                    if( !out[k[0]] ) out[k[0]] = 0;
                    if( k[1] === true ) out[k[0]] += 1;
                }
            });
          });
        return JSON.stringify( out );
    },

};
