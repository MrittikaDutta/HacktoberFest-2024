// A JavaScript program for Floyd Warshall All
      // Pairs Shortest Path algorithm.

      var INF = 99999;
      class AllPairShortestPath {
        constructor() {
          this.V = 4;
        }

        floydWarshall(graph) {
          var dist = Array.from(Array(this.V), () => new Array(this.V).fill(0));
          var i, j, k;

          // Initialize the solution matrix
          // same as input graph matrix
          // Or we can say the initial
          // values of shortest distances
          // are based on shortest paths
          // considering no intermediate
          // vertex
          for (i = 0; i < this.V; i++) {
            for (j = 0; j < this.V; j++) {
              dist[i][j] = graph[i][j];
            }
          }

          /* Add all vertices one by one to
        the set of intermediate vertices.
        ---> Before start of a iteration,
            we have shortest distances
            between all pairs of vertices
            such that the shortest distances
            consider only the vertices in
            set {0, 1, 2, .. k-1} as
            intermediate vertices.
        ---> After the end of a iteration,
            vertex no. k is added
            to the set of intermediate
            vertices and the set
            becomes {0, 1, 2, .. k} */
          for (k = 0; k < this.V; k++) {
            // Pick all vertices as source
            // one by one
            for (i = 0; i < this.V; i++) {
              // Pick all vertices as destination
              // for the above picked source
              for (j = 0; j < this.V; j++) {
                // If vertex k is on the shortest
                // path from i to j, then update
                // the value of dist[i][j]
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                  dist[i][j] = dist[i][k] + dist[k][j];
                }
              }
            }
          }

          // Print the shortest distance matrix
          this.printSolution(dist);
        }

        printSolution(dist) {
          document.write(
            "Following matrix shows the shortest " +
              "distances between every pair of vertices<br>"
          );
          for (var i = 0; i < this.V; ++i) {
            for (var j = 0; j < this.V; ++j) {
              if (dist[i][j] == INF) {
                document.write("&emsp;INF ");
              } else {
                document.write("&emsp;&emsp;" + dist[i][j] + " ");
              }
            }

            document.write("<br>");
          }
        }
      }
      // Driver Code
      /* Let us create the following
        weighted graph
            10
        (0)------->(3)
        |         /|\
        5 |         |
        |         | 1
        \|/         |
        (1)------->(2)
            3             */
      var graph = [
        [0, 5, INF, 10],
        [INF, 0, 3, INF],
        [INF, INF, 0, 1],
        [INF, INF, INF, 0],
      ];

      var a = new AllPairShortestPath();

      // Print the solution
      a.floydWarshall(graph);
      
      // This code is contributed by rdtaank.
