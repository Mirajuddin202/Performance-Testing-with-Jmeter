/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 493.0, "minX": 0.0, "maxY": 1577.0, "series": [{"data": [[0.0, 493.0], [0.1, 493.0], [0.2, 493.0], [0.3, 493.0], [0.4, 493.0], [0.5, 493.0], [0.6, 495.0], [0.7, 495.0], [0.8, 495.0], [0.9, 495.0], [1.0, 495.0], [1.1, 495.0], [1.2, 498.0], [1.3, 498.0], [1.4, 498.0], [1.5, 498.0], [1.6, 498.0], [1.7, 498.0], [1.8, 499.0], [1.9, 499.0], [2.0, 499.0], [2.1, 499.0], [2.2, 499.0], [2.3, 499.0], [2.4, 500.0], [2.5, 500.0], [2.6, 500.0], [2.7, 500.0], [2.8, 500.0], [2.9, 500.0], [3.0, 501.0], [3.1, 501.0], [3.2, 501.0], [3.3, 501.0], [3.4, 501.0], [3.5, 501.0], [3.6, 503.0], [3.7, 503.0], [3.8, 503.0], [3.9, 503.0], [4.0, 503.0], [4.1, 503.0], [4.2, 508.0], [4.3, 508.0], [4.4, 508.0], [4.5, 508.0], [4.6, 508.0], [4.7, 508.0], [4.8, 508.0], [4.9, 508.0], [5.0, 508.0], [5.1, 508.0], [5.2, 508.0], [5.3, 508.0], [5.4, 508.0], [5.5, 508.0], [5.6, 508.0], [5.7, 508.0], [5.8, 508.0], [5.9, 508.0], [6.0, 509.0], [6.1, 509.0], [6.2, 509.0], [6.3, 509.0], [6.4, 509.0], [6.5, 509.0], [6.6, 509.0], [6.7, 509.0], [6.8, 509.0], [6.9, 509.0], [7.0, 509.0], [7.1, 509.0], [7.2, 510.0], [7.3, 510.0], [7.4, 510.0], [7.5, 510.0], [7.6, 510.0], [7.7, 510.0], [7.8, 511.0], [7.9, 511.0], [8.0, 511.0], [8.1, 511.0], [8.2, 511.0], [8.3, 511.0], [8.4, 511.0], [8.5, 511.0], [8.6, 511.0], [8.7, 511.0], [8.8, 511.0], [8.9, 511.0], [9.0, 512.0], [9.1, 512.0], [9.2, 512.0], [9.3, 512.0], [9.4, 512.0], [9.5, 512.0], [9.6, 512.0], [9.7, 512.0], [9.8, 512.0], [9.9, 512.0], [10.0, 512.0], [10.1, 512.0], [10.2, 513.0], [10.3, 513.0], [10.4, 513.0], [10.5, 513.0], [10.6, 513.0], [10.7, 513.0], [10.8, 513.0], [10.9, 513.0], [11.0, 513.0], [11.1, 513.0], [11.2, 513.0], [11.3, 513.0], [11.4, 513.0], [11.5, 513.0], [11.6, 513.0], [11.7, 513.0], [11.8, 513.0], [11.9, 513.0], [12.0, 515.0], [12.1, 515.0], [12.2, 515.0], [12.3, 515.0], [12.4, 515.0], [12.5, 515.0], [12.6, 517.0], [12.7, 517.0], [12.8, 517.0], [12.9, 517.0], [13.0, 517.0], [13.1, 517.0], [13.2, 520.0], [13.3, 520.0], [13.4, 520.0], [13.5, 520.0], [13.6, 520.0], [13.7, 520.0], [13.8, 522.0], [13.9, 522.0], [14.0, 522.0], [14.1, 522.0], [14.2, 522.0], [14.3, 522.0], [14.4, 522.0], [14.5, 522.0], [14.6, 522.0], [14.7, 522.0], [14.8, 522.0], [14.9, 522.0], [15.0, 524.0], [15.1, 524.0], [15.2, 524.0], [15.3, 524.0], [15.4, 524.0], [15.5, 524.0], [15.6, 525.0], [15.7, 525.0], [15.8, 525.0], [15.9, 525.0], [16.0, 525.0], [16.1, 525.0], [16.2, 525.0], [16.3, 525.0], [16.4, 525.0], [16.5, 525.0], [16.6, 525.0], [16.7, 525.0], [16.8, 525.0], [16.9, 525.0], [17.0, 525.0], [17.1, 525.0], [17.2, 525.0], [17.3, 525.0], [17.4, 526.0], [17.5, 526.0], [17.6, 526.0], [17.7, 526.0], [17.8, 526.0], [17.9, 526.0], [18.0, 527.0], [18.1, 527.0], [18.2, 527.0], [18.3, 527.0], [18.4, 527.0], [18.5, 527.0], [18.6, 527.0], [18.7, 527.0], [18.8, 527.0], [18.9, 527.0], [19.0, 527.0], [19.1, 527.0], [19.2, 528.0], [19.3, 528.0], [19.4, 528.0], [19.5, 528.0], [19.6, 528.0], [19.7, 528.0], [19.8, 529.0], [19.9, 529.0], [20.0, 529.0], [20.1, 529.0], [20.2, 529.0], [20.3, 529.0], [20.4, 529.0], [20.5, 529.0], [20.6, 529.0], [20.7, 529.0], [20.8, 529.0], [20.9, 529.0], [21.0, 530.0], [21.1, 530.0], [21.2, 530.0], [21.3, 530.0], [21.4, 530.0], [21.5, 530.0], [21.6, 530.0], [21.7, 530.0], [21.8, 530.0], [21.9, 530.0], [22.0, 530.0], [22.1, 530.0], [22.2, 530.0], [22.3, 530.0], [22.4, 530.0], [22.5, 530.0], [22.6, 530.0], [22.7, 530.0], [22.8, 530.0], [22.9, 530.0], [23.0, 530.0], [23.1, 530.0], [23.2, 530.0], [23.3, 530.0], [23.4, 532.0], [23.5, 532.0], [23.6, 532.0], [23.7, 532.0], [23.8, 532.0], [23.9, 532.0], [24.0, 532.0], [24.1, 532.0], [24.2, 532.0], [24.3, 532.0], [24.4, 532.0], [24.5, 532.0], [24.6, 532.0], [24.7, 532.0], [24.8, 532.0], [24.9, 532.0], [25.0, 532.0], [25.1, 532.0], [25.2, 533.0], [25.3, 533.0], [25.4, 533.0], [25.5, 533.0], [25.6, 533.0], [25.7, 533.0], [25.8, 536.0], [25.9, 536.0], [26.0, 536.0], [26.1, 536.0], [26.2, 536.0], [26.3, 536.0], [26.4, 537.0], [26.5, 537.0], [26.6, 537.0], [26.7, 537.0], [26.8, 537.0], [26.9, 537.0], [27.0, 537.0], [27.1, 537.0], [27.2, 537.0], [27.3, 537.0], [27.4, 537.0], [27.5, 537.0], [27.6, 537.0], [27.7, 537.0], [27.8, 537.0], [27.9, 537.0], [28.0, 537.0], [28.1, 537.0], [28.2, 537.0], [28.3, 537.0], [28.4, 537.0], [28.5, 537.0], [28.6, 537.0], [28.7, 537.0], [28.8, 538.0], [28.9, 538.0], [29.0, 538.0], [29.1, 538.0], [29.2, 538.0], [29.3, 538.0], [29.4, 539.0], [29.5, 539.0], [29.6, 539.0], [29.7, 539.0], [29.8, 539.0], [29.9, 539.0], [30.0, 541.0], [30.1, 541.0], [30.2, 541.0], [30.3, 541.0], [30.4, 541.0], [30.5, 541.0], [30.6, 543.0], [30.7, 543.0], [30.8, 543.0], [30.9, 543.0], [31.0, 543.0], [31.1, 543.0], [31.2, 544.0], [31.3, 544.0], [31.4, 544.0], [31.5, 544.0], [31.6, 544.0], [31.7, 544.0], [31.8, 546.0], [31.9, 546.0], [32.0, 546.0], [32.1, 546.0], [32.2, 546.0], [32.3, 546.0], [32.4, 547.0], [32.5, 547.0], [32.6, 547.0], [32.7, 547.0], [32.8, 547.0], [32.9, 547.0], [33.0, 548.0], [33.1, 548.0], [33.2, 548.0], [33.3, 548.0], [33.4, 548.0], [33.5, 548.0], [33.6, 553.0], [33.7, 553.0], [33.8, 553.0], [33.9, 553.0], [34.0, 553.0], [34.1, 553.0], [34.2, 553.0], [34.3, 553.0], [34.4, 553.0], [34.5, 553.0], [34.6, 553.0], [34.7, 553.0], [34.8, 553.0], [34.9, 553.0], [35.0, 553.0], [35.1, 553.0], [35.2, 553.0], [35.3, 553.0], [35.4, 555.0], [35.5, 555.0], [35.6, 555.0], [35.7, 555.0], [35.8, 555.0], [35.9, 555.0], [36.0, 555.0], [36.1, 555.0], [36.2, 555.0], [36.3, 555.0], [36.4, 555.0], [36.5, 555.0], [36.6, 555.0], [36.7, 555.0], [36.8, 555.0], [36.9, 555.0], [37.0, 555.0], [37.1, 555.0], [37.2, 557.0], [37.3, 557.0], [37.4, 557.0], [37.5, 557.0], [37.6, 557.0], [37.7, 557.0], [37.8, 558.0], [37.9, 558.0], [38.0, 558.0], [38.1, 558.0], [38.2, 558.0], [38.3, 558.0], [38.4, 558.0], [38.5, 558.0], [38.6, 558.0], [38.7, 558.0], [38.8, 558.0], [38.9, 558.0], [39.0, 559.0], [39.1, 559.0], [39.2, 559.0], [39.3, 559.0], [39.4, 559.0], [39.5, 559.0], [39.6, 560.0], [39.7, 560.0], [39.8, 560.0], [39.9, 560.0], [40.0, 560.0], [40.1, 560.0], [40.2, 562.0], [40.3, 562.0], [40.4, 562.0], [40.5, 562.0], [40.6, 562.0], [40.7, 562.0], [40.8, 562.0], [40.9, 562.0], [41.0, 562.0], [41.1, 562.0], [41.2, 562.0], [41.3, 562.0], [41.4, 562.0], [41.5, 562.0], [41.6, 562.0], [41.7, 562.0], [41.8, 562.0], [41.9, 562.0], [42.0, 564.0], [42.1, 564.0], [42.2, 564.0], [42.3, 564.0], [42.4, 564.0], [42.5, 564.0], [42.6, 564.0], [42.7, 564.0], [42.8, 564.0], [42.9, 564.0], [43.0, 564.0], [43.1, 564.0], [43.2, 565.0], [43.3, 565.0], [43.4, 565.0], [43.5, 565.0], [43.6, 565.0], [43.7, 565.0], [43.8, 565.0], [43.9, 565.0], [44.0, 565.0], [44.1, 565.0], [44.2, 565.0], [44.3, 565.0], [44.4, 565.0], [44.5, 565.0], [44.6, 565.0], [44.7, 565.0], [44.8, 565.0], [44.9, 565.0], [45.0, 565.0], [45.1, 565.0], [45.2, 565.0], [45.3, 565.0], [45.4, 565.0], [45.5, 565.0], [45.6, 566.0], [45.7, 566.0], [45.8, 566.0], [45.9, 566.0], [46.0, 566.0], [46.1, 566.0], [46.2, 566.0], [46.3, 566.0], [46.4, 566.0], [46.5, 566.0], [46.6, 566.0], [46.7, 566.0], [46.8, 567.0], [46.9, 567.0], [47.0, 567.0], [47.1, 567.0], [47.2, 567.0], [47.3, 567.0], [47.4, 568.0], [47.5, 568.0], [47.6, 568.0], [47.7, 568.0], [47.8, 568.0], [47.9, 568.0], [48.0, 568.0], [48.1, 568.0], [48.2, 568.0], [48.3, 568.0], [48.4, 568.0], [48.5, 568.0], [48.6, 568.0], [48.7, 568.0], [48.8, 568.0], [48.9, 568.0], [49.0, 568.0], [49.1, 568.0], [49.2, 569.0], [49.3, 569.0], [49.4, 569.0], [49.5, 569.0], [49.6, 569.0], [49.7, 569.0], [49.8, 569.0], [49.9, 569.0], [50.0, 569.0], [50.1, 569.0], [50.2, 569.0], [50.3, 570.0], [50.4, 570.0], [50.5, 570.0], [50.6, 570.0], [50.7, 570.0], [50.8, 570.0], [50.9, 570.0], [51.0, 570.0], [51.1, 570.0], [51.2, 570.0], [51.3, 570.0], [51.4, 570.0], [51.5, 571.0], [51.6, 571.0], [51.7, 571.0], [51.8, 571.0], [51.9, 571.0], [52.0, 571.0], [52.1, 572.0], [52.2, 572.0], [52.3, 572.0], [52.4, 572.0], [52.5, 572.0], [52.6, 572.0], [52.7, 572.0], [52.8, 572.0], [52.9, 572.0], [53.0, 572.0], [53.1, 572.0], [53.2, 572.0], [53.3, 573.0], [53.4, 573.0], [53.5, 573.0], [53.6, 573.0], [53.7, 573.0], [53.8, 573.0], [53.9, 573.0], [54.0, 573.0], [54.1, 573.0], [54.2, 573.0], [54.3, 573.0], [54.4, 573.0], [54.5, 573.0], [54.6, 573.0], [54.7, 573.0], [54.8, 573.0], [54.9, 573.0], [55.0, 573.0], [55.1, 574.0], [55.2, 574.0], [55.3, 574.0], [55.4, 574.0], [55.5, 574.0], [55.6, 574.0], [55.7, 574.0], [55.8, 574.0], [55.9, 574.0], [56.0, 574.0], [56.1, 574.0], [56.2, 574.0], [56.3, 574.0], [56.4, 574.0], [56.5, 574.0], [56.6, 574.0], [56.7, 574.0], [56.8, 574.0], [56.9, 574.0], [57.0, 574.0], [57.1, 574.0], [57.2, 574.0], [57.3, 574.0], [57.4, 574.0], [57.5, 574.0], [57.6, 574.0], [57.7, 574.0], [57.8, 574.0], [57.9, 574.0], [58.0, 574.0], [58.1, 575.0], [58.2, 575.0], [58.3, 575.0], [58.4, 575.0], [58.5, 575.0], [58.6, 575.0], [58.7, 575.0], [58.8, 575.0], [58.9, 575.0], [59.0, 575.0], [59.1, 575.0], [59.2, 575.0], [59.3, 576.0], [59.4, 576.0], [59.5, 576.0], [59.6, 576.0], [59.7, 576.0], [59.8, 576.0], [59.9, 576.0], [60.0, 576.0], [60.1, 576.0], [60.2, 576.0], [60.3, 576.0], [60.4, 576.0], [60.5, 577.0], [60.6, 577.0], [60.7, 577.0], [60.8, 577.0], [60.9, 577.0], [61.0, 577.0], [61.1, 578.0], [61.2, 578.0], [61.3, 578.0], [61.4, 578.0], [61.5, 578.0], [61.6, 578.0], [61.7, 578.0], [61.8, 578.0], [61.9, 578.0], [62.0, 578.0], [62.1, 578.0], [62.2, 578.0], [62.3, 578.0], [62.4, 578.0], [62.5, 578.0], [62.6, 578.0], [62.7, 578.0], [62.8, 578.0], [62.9, 578.0], [63.0, 578.0], [63.1, 578.0], [63.2, 578.0], [63.3, 578.0], [63.4, 578.0], [63.5, 579.0], [63.6, 579.0], [63.7, 579.0], [63.8, 579.0], [63.9, 579.0], [64.0, 579.0], [64.1, 580.0], [64.2, 580.0], [64.3, 580.0], [64.4, 580.0], [64.5, 580.0], [64.6, 580.0], [64.7, 580.0], [64.8, 580.0], [64.9, 580.0], [65.0, 580.0], [65.1, 580.0], [65.2, 580.0], [65.3, 580.0], [65.4, 580.0], [65.5, 580.0], [65.6, 580.0], [65.7, 580.0], [65.8, 580.0], [65.9, 580.0], [66.0, 580.0], [66.1, 580.0], [66.2, 580.0], [66.3, 580.0], [66.4, 580.0], [66.5, 580.0], [66.6, 580.0], [66.7, 580.0], [66.8, 580.0], [66.9, 580.0], [67.0, 580.0], [67.1, 581.0], [67.2, 581.0], [67.3, 581.0], [67.4, 581.0], [67.5, 581.0], [67.6, 581.0], [67.7, 581.0], [67.8, 581.0], [67.9, 581.0], [68.0, 581.0], [68.1, 581.0], [68.2, 581.0], [68.3, 582.0], [68.4, 582.0], [68.5, 582.0], [68.6, 582.0], [68.7, 582.0], [68.8, 582.0], [68.9, 582.0], [69.0, 582.0], [69.1, 582.0], [69.2, 582.0], [69.3, 582.0], [69.4, 582.0], [69.5, 583.0], [69.6, 583.0], [69.7, 583.0], [69.8, 583.0], [69.9, 583.0], [70.0, 583.0], [70.1, 583.0], [70.2, 583.0], [70.3, 583.0], [70.4, 583.0], [70.5, 583.0], [70.6, 583.0], [70.7, 583.0], [70.8, 583.0], [70.9, 583.0], [71.0, 583.0], [71.1, 583.0], [71.2, 583.0], [71.3, 585.0], [71.4, 585.0], [71.5, 585.0], [71.6, 585.0], [71.7, 585.0], [71.8, 585.0], [71.9, 585.0], [72.0, 585.0], [72.1, 585.0], [72.2, 585.0], [72.3, 585.0], [72.4, 585.0], [72.5, 587.0], [72.6, 587.0], [72.7, 587.0], [72.8, 587.0], [72.9, 587.0], [73.0, 587.0], [73.1, 587.0], [73.2, 587.0], [73.3, 587.0], [73.4, 587.0], [73.5, 587.0], [73.6, 587.0], [73.7, 587.0], [73.8, 587.0], [73.9, 587.0], [74.0, 587.0], [74.1, 587.0], [74.2, 587.0], [74.3, 588.0], [74.4, 588.0], [74.5, 588.0], [74.6, 588.0], [74.7, 588.0], [74.8, 588.0], [74.9, 588.0], [75.0, 588.0], [75.1, 588.0], [75.2, 588.0], [75.3, 588.0], [75.4, 588.0], [75.5, 589.0], [75.6, 589.0], [75.7, 589.0], [75.8, 589.0], [75.9, 589.0], [76.0, 589.0], [76.1, 589.0], [76.2, 589.0], [76.3, 589.0], [76.4, 589.0], [76.5, 589.0], [76.6, 589.0], [76.7, 593.0], [76.8, 593.0], [76.9, 593.0], [77.0, 593.0], [77.1, 593.0], [77.2, 593.0], [77.3, 593.0], [77.4, 593.0], [77.5, 593.0], [77.6, 593.0], [77.7, 593.0], [77.8, 593.0], [77.9, 593.0], [78.0, 593.0], [78.1, 593.0], [78.2, 593.0], [78.3, 593.0], [78.4, 593.0], [78.5, 594.0], [78.6, 594.0], [78.7, 594.0], [78.8, 594.0], [78.9, 594.0], [79.0, 594.0], [79.1, 594.0], [79.2, 594.0], [79.3, 594.0], [79.4, 594.0], [79.5, 594.0], [79.6, 594.0], [79.7, 594.0], [79.8, 594.0], [79.9, 594.0], [80.0, 594.0], [80.1, 594.0], [80.2, 594.0], [80.3, 595.0], [80.4, 595.0], [80.5, 595.0], [80.6, 595.0], [80.7, 595.0], [80.8, 595.0], [80.9, 596.0], [81.0, 596.0], [81.1, 596.0], [81.2, 596.0], [81.3, 596.0], [81.4, 596.0], [81.5, 596.0], [81.6, 596.0], [81.7, 596.0], [81.8, 596.0], [81.9, 596.0], [82.0, 596.0], [82.1, 597.0], [82.2, 597.0], [82.3, 597.0], [82.4, 597.0], [82.5, 597.0], [82.6, 597.0], [82.7, 598.0], [82.8, 598.0], [82.9, 598.0], [83.0, 598.0], [83.1, 598.0], [83.2, 598.0], [83.3, 599.0], [83.4, 599.0], [83.5, 599.0], [83.6, 599.0], [83.7, 599.0], [83.8, 599.0], [83.9, 599.0], [84.0, 599.0], [84.1, 599.0], [84.2, 599.0], [84.3, 599.0], [84.4, 599.0], [84.5, 600.0], [84.6, 600.0], [84.7, 600.0], [84.8, 600.0], [84.9, 600.0], [85.0, 600.0], [85.1, 603.0], [85.2, 603.0], [85.3, 603.0], [85.4, 603.0], [85.5, 603.0], [85.6, 603.0], [85.7, 605.0], [85.8, 605.0], [85.9, 605.0], [86.0, 605.0], [86.1, 605.0], [86.2, 605.0], [86.3, 607.0], [86.4, 607.0], [86.5, 607.0], [86.6, 607.0], [86.7, 607.0], [86.8, 607.0], [86.9, 607.0], [87.0, 607.0], [87.1, 607.0], [87.2, 607.0], [87.3, 607.0], [87.4, 607.0], [87.5, 608.0], [87.6, 608.0], [87.7, 608.0], [87.8, 608.0], [87.9, 608.0], [88.0, 608.0], [88.1, 610.0], [88.2, 610.0], [88.3, 610.0], [88.4, 610.0], [88.5, 610.0], [88.6, 610.0], [88.7, 611.0], [88.8, 611.0], [88.9, 611.0], [89.0, 611.0], [89.1, 611.0], [89.2, 611.0], [89.3, 619.0], [89.4, 619.0], [89.5, 619.0], [89.6, 619.0], [89.7, 619.0], [89.8, 619.0], [89.9, 622.0], [90.0, 622.0], [90.1, 622.0], [90.2, 622.0], [90.3, 622.0], [90.4, 622.0], [90.5, 629.0], [90.6, 629.0], [90.7, 629.0], [90.8, 629.0], [90.9, 629.0], [91.0, 629.0], [91.1, 632.0], [91.2, 632.0], [91.3, 632.0], [91.4, 632.0], [91.5, 632.0], [91.6, 632.0], [91.7, 659.0], [91.8, 659.0], [91.9, 659.0], [92.0, 659.0], [92.1, 659.0], [92.2, 659.0], [92.3, 678.0], [92.4, 678.0], [92.5, 678.0], [92.6, 678.0], [92.7, 678.0], [92.8, 678.0], [92.9, 719.0], [93.0, 719.0], [93.1, 719.0], [93.2, 719.0], [93.3, 719.0], [93.4, 719.0], [93.5, 743.0], [93.6, 743.0], [93.7, 743.0], [93.8, 743.0], [93.9, 743.0], [94.0, 743.0], [94.1, 757.0], [94.2, 757.0], [94.3, 757.0], [94.4, 757.0], [94.5, 757.0], [94.6, 757.0], [94.7, 897.0], [94.8, 897.0], [94.9, 897.0], [95.0, 897.0], [95.1, 897.0], [95.2, 897.0], [95.3, 951.0], [95.4, 951.0], [95.5, 951.0], [95.6, 951.0], [95.7, 951.0], [95.8, 951.0], [95.9, 980.0], [96.0, 980.0], [96.1, 980.0], [96.2, 980.0], [96.3, 980.0], [96.4, 980.0], [96.5, 1114.0], [96.6, 1114.0], [96.7, 1114.0], [96.8, 1114.0], [96.9, 1114.0], [97.0, 1114.0], [97.1, 1153.0], [97.2, 1153.0], [97.3, 1153.0], [97.4, 1153.0], [97.5, 1153.0], [97.6, 1153.0], [97.7, 1182.0], [97.8, 1182.0], [97.9, 1182.0], [98.0, 1182.0], [98.1, 1182.0], [98.2, 1182.0], [98.3, 1242.0], [98.4, 1242.0], [98.5, 1242.0], [98.6, 1242.0], [98.7, 1242.0], [98.8, 1242.0], [98.9, 1529.0], [99.0, 1529.0], [99.1, 1529.0], [99.2, 1529.0], [99.3, 1529.0], [99.4, 1529.0], [99.5, 1577.0], [99.6, 1577.0], [99.7, 1577.0], [99.8, 1577.0], [99.9, 1577.0]], "isOverall": false, "label": "Book-Api", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 137.0, "series": [{"data": [[1100.0, 3.0], [600.0, 14.0], [1200.0, 1.0], [700.0, 3.0], [1500.0, 2.0], [800.0, 1.0], [400.0, 4.0], [900.0, 2.0], [500.0, 137.0]], "isOverall": false, "label": "Book-Api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 160.0, "series": [{"data": [[0.0, 5.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 160.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 2.0588235294117645, "minX": 1.72796544E12, "maxY": 2.1818181818181825, "series": [{"data": [[1.7279655E12, 2.0588235294117645], [1.72796544E12, 2.1818181818181825]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7279655E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 530.0, "minX": 1.0, "maxY": 917.3333333333334, "series": [{"data": [[4.0, 917.3333333333334], [2.0, 560.6027397260276], [1.0, 530.0], [3.0, 859.7647058823529]], "isOverall": false, "label": "Book-Api", "isController": false}, {"data": [[2.131736526946107, 597.2814371257487]], "isOverall": false, "label": "Book-Api-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 4.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 151.86666666666667, "minX": 1.72796544E12, "maxY": 5669.4, "series": [{"data": [[1.7279655E12, 3894.133333333333], [1.72796544E12, 5669.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7279655E12, 151.86666666666667], [1.72796544E12, 221.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7279655E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 582.529411764706, "minX": 1.72796544E12, "maxY": 607.4141414141413, "series": [{"data": [[1.7279655E12, 582.529411764706], [1.72796544E12, 607.4141414141413]], "isOverall": false, "label": "Book-Api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7279655E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 582.485294117647, "minX": 1.72796544E12, "maxY": 607.0909090909093, "series": [{"data": [[1.7279655E12, 582.485294117647], [1.72796544E12, 607.0909090909093]], "isOverall": false, "label": "Book-Api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7279655E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 387.3676470588236, "minX": 1.72796544E12, "maxY": 404.5151515151515, "series": [{"data": [[1.7279655E12, 387.3676470588236], [1.72796544E12, 404.5151515151515]], "isOverall": false, "label": "Book-Api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7279655E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 493.0, "minX": 1.72796544E12, "maxY": 1577.0, "series": [{"data": [[1.7279655E12, 1182.0], [1.72796544E12, 1577.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7279655E12, 634.7], [1.72796544E12, 619.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7279655E12, 1182.0], [1.72796544E12, 1577.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7279655E12, 750.6999999999999], [1.72796544E12, 1114.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7279655E12, 493.0], [1.72796544E12, 499.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7279655E12, 567.5], [1.72796544E12, 570.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7279655E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 530.0, "minX": 1.0, "maxY": 594.5, "series": [{"data": [[4.0, 594.5], [2.0, 571.0], [1.0, 530.0], [3.0, 569.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 530.0, "minX": 1.0, "maxY": 590.0, "series": [{"data": [[4.0, 590.0], [2.0, 571.0], [1.0, 530.0], [3.0, 569.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.1166666666666667, "minX": 1.72796544E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7279655E12, 1.1166666666666667], [1.72796544E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7279655E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.1333333333333333, "minX": 1.72796544E12, "maxY": 1.65, "series": [{"data": [[1.7279655E12, 1.1333333333333333], [1.72796544E12, 1.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7279655E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.1333333333333333, "minX": 1.72796544E12, "maxY": 1.65, "series": [{"data": [[1.7279655E12, 1.1333333333333333], [1.72796544E12, 1.65]], "isOverall": false, "label": "Book-Api-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7279655E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.1333333333333333, "minX": 1.72796544E12, "maxY": 1.65, "series": [{"data": [[1.7279655E12, 1.1333333333333333], [1.72796544E12, 1.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7279655E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

