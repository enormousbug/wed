import { Component, OnInit } from '@angular/core';
import { Feature, Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Vector from 'ol/source/Vector';
import * as ol from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import Point from 'ol/geom/Point';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  map: any;
  constructor() {}

  ngOnInit(): void {
    this.map = new Map({
      target: 'wedding_map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: ol.fromLonLat([17.00726, 51.04564]),
        zoom: 13,
      }),
    });

    let markers = new VectorLayer({
      source: new Vector({
        features: [
          new Feature({
            geometry: new Point(ol.fromLonLat([17.02328, 51.05707])),
          }),
          new Feature({
            geometry: new Point(ol.fromLonLat([16.99124, 51.03421])),
          })
        ],
      }),
    });
    this.map.addLayer(markers);
  }
}
