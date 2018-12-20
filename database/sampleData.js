const sampleRestaurant = {
  restName: 'The Saratoga - San Francisco',
  cards: [
    {
      cardName: 'Sunday Brunch',
      cardNotes: 'Only available 8am - 11:30am',
      categories: [
        {
          categName: 'Snack',
          categDes: 'Light, fresh, and guaranteed to start you on right foot',
          items: [
            {
              itemName: 'Avocado Toast',
              itemDes: 'Smoked Trout and Trout Roe, Red Onion, Egg Yolk, Cherry Tomatoes',
              itemPrice: '$14.00',
              addOns: [
                {
                  addOnName: 'Applewood Smoked Bacon',
                  addOnPrice: '+$4.00',
                },
              ],
            },
            {
              itemName: 'Yogurt Parfait',
              itemDes: 'Fruts, Jam, Granola',
              itemPrice: '$8.00',
            },
            {
              itemName: 'Jenga Tots "The Lox"',
              itemDes: 'Cream Cheese, Smoked Salmon, Cucumber, Capers, Red Onion',
              itemPrice: '$21.00',
            },
            {
              itemName: 'Billionaire\'s Bacon',
              itemDes: 'Molasses, Rum, Maple Syrup',
              itemPrice: '$13.00',
            },
          ],
        },
        {
          categName: 'Sweet',
          categDes: 'Who doesn\'t have a bit of a sweet tooth?',
          items: [
            {
              itemName: 'Texas French Toast',
              itemDes: 'Thick-Cut Brioche, Bourbon Syrup, Bacon Powder',
              itemPrice: '$12.00',
            },
            {
              itemName: 'Killer Coffee Cake',
              itemDes: 'Coffee Bun, Chocolate Powder, Walnut Streusel',
              itemPrice: '$9.00',
              addOns: [
                {
                  addOnName: 'Vanilla Gelato',
                  addOnPrice: '+$4.00',
                },
                {
                  addOnName: 'St. George Nola Coffee Liquor',
                  addOnPrice: '+$6.00',
                },
              ],
            },
            {
              itemName: 'Mimosa Donut',
              itemDes: 'Blood Orange Glaze, Pop Rocks',
              itemPrice: '$8.00',
            },
          ],
        },
        {
          categName: 'Hearty',
          items: [
            {
              itemName: 'Eggs Florentine',
              itemDes: 'Soft-Poached Eggs, Spinach, English Muffin, Hollandaise',
              itemPrice: '$16.00',
              addOns: [
                {
                  addOnName: 'House-Made Ham',
                  addOnPrice: '+$5.00',
                },
              ],
            },
            {
              itemName: 'The TL Omelet',
              itemDes: 'Tallegio Cheese, Melted Leeks',
              itemPrice: '$16.00',
            },
            {
              itemName: 'Mole Flautas',
              itemDes: 'Braised Chicken, Red Cabbage, Pico de Gallo, Crema',
              itemPrice: '$17.00',
            },
            {
              itemName: 'Steak and Eggs',
              itemDes: 'Chino Valley Ranch Eggs, Salsa Verde',
              itemPrice: '$27.00',
            },
            {
              itemName: 'The Saratoga Burger',
              itemDes: 'Taleggio Cheese, Slaw, Onion Bun',
              itemPrice: '$16.00',
            },
            {
              itemName: 'Fried Chicken Salad',
              itemDes: 'Pepitas, Blue CHeese, APple, Candied Walnuts, Dijon Vinaigrette',
              itemPrice: '$18.00',
            },
          ],
        },
        {
          categName: 'Sides',
          items: [
            {
              itemName: 'Toast',
              itemPrice: '$4.00',
            },
            {
              itemName: 'Chino Valley Ranch Egg',
              itemPrice: '$3.00',
            },
            {
              itemName: 'Bacon',
              itemPrice: '$5.00',
            },
            {
              itemName: 'Haas Avocado',
              itemPrice: '$5.00',
            },
            {
              itemName: 'Cherry Tomatos',
              itemPrice: '$4.00',
            },
          ],
        },
      ],
    },
    {
      cardName: 'Spirits, Beer & Wine',
      cardNotes: 'Must be 21+ to order',
      categories: [
        {
          categName: 'Wines by the Glass',
        },
        {
          categName: 'Sparkling',
          items: [
            {
              itemName: 'Prosecco, Adami, Bosco di Gica, Valdobbiadene, Brut NV',
              itemPrice: '$12.00',
            },
            {
              itemName: 'Champagne, Larmandier-Bernier, Blanc de Blanc, Extra-Brut NV',
              itemPrice: '$18.00',
            },
          ],
        },
        {
          categName: 'White',
          items: [
            {
              itemName: 'Sauvignon Blanc, Biscaye Baie, Côtes de Gascogne 2016',
              itemPrice: '$15.00',
            },
            {
              itemName: 'Grüner Veltliner, Hofer, Niederösterreich 2015',
              itemPrice: '$11.00',
            },
            {
              itemName: 'Riesling, Kabinett, Rosch, Cuvée Bacchus, Leiwener Klostergarten 2015',
              itemPrice: '$13.00',
            },
            {
              itemName: 'Chenin Blanc, Champalou, Vouvray, Sec 2016',
              itemPrice: '$14.00',
            },
            {
              itemName: 'Chardonnay, Routestock Cellars, Carneros 2014',
              itemPrice: '$16.00',
            },
          ],
        },
        {
          categName: 'Summer of Rosé',
          items: [
            {
              itemName: 'Pinot Noir, Pascal Jolivet, Sancerre 2016',
              itemPrice: '$11.00',
            },
            {
              itemName: 'Nerello Mascalese, Graci, Etna Rosato, Sicilia 2017',
              itemPrice: '$13.00',
            },
            {
              itemName: 'Grenache Blend, Chateau Gassier, Côtes de Provence 2017',
              itemPrice: '$11.00',
            },
          ],
        },
        {
          categName: 'Red',
          items: [
            {
              itemName: 'Pinot Noir, Stoller Estate, Dundee Hills 2015',
              itemPrice: '$20.00',
            },
            {
              itemName: 'Sangiovese, Poliziano, Rosso di Montepulciano 2015',
              itemPrice: '$13.00',
            },
            {
              itemName: 'Zinfandel, Seghesio, Sonoma County 2016',
              itemPrice: '$15.00',
            },
            {
              itemName: 'Syrah, Paul Jaboulet Aîné, Crozes-Hermitage, Les Jalets 2015',
              itemPrice: '$14.00',
            },
            {
              itemName: 'Cabernet Sauvignon, Château Tournefeuille, Lalande-de-Pomerol 2014',
              itemPrice: '$16.00',
            },
            {
              itemName: 'Cabernet Sauvignon, Robert Craig, Napa Valley 2014',
              itemPrice: '$22.00',
            },
          ],
        },
      ],
    },
  ],
};

module.exports.sampleRestaurant = sampleRestaurant;
