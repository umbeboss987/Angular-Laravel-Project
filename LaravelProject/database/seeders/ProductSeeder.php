<?php

namespace Database\Seeders;

use Illuminate\support\Facades\DB;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product')->insert([

            'name' => 'Redmi note 7', 
            'description' => 'Xiaomi Redmi Note 7 è uno smartphone dotato di batteria da 4000 mAh, display con diagonale da 6.26 pollici e risoluzione di 1080x2340 pixel, oltre a 3 o 4 GB di memoria RAM e 32 o 64 GB di spazio di archiviazione in base al modello. 
                            Il processore equipaggiato è di tipo Octa Core, modello Qualcomm Snapdragon 660 SDM660 e funziona alla frequenza di 2.2 GHz. La GPU è Adreno 512. 
                            La fotocamera frontale è di 13 megapixel e quella posteriore di 48 megapixel.', 
            'price' => 130.30,
            'photo' => 'https://i.ebayimg.com/images/g/Gu8AAOSwWkteQHTN/s-l640.jpg',
            'type'  => 'phone',
            ]
        );


        DB::table('product')->insert([
            
            'name' => 'Huawei P30', 
            'description' => 'Huawei P30 Pro è uno smartphone Android avanzato e completo sotto tutti i punti di vista con alcune eccellenze. 
                            Dispone di un grande display da 6.47 pollici con una risoluzione di 2340x1080 pixel. Le funzionalità offerte da questo Huawei P30 Pro sono veramente tante e all avanguardia.
                             A cominciare dal modulo LTE 4G che permette un trasferimento dati e una navigazione in internet eccellente.', 
            'price' => 230.30,
            'photo' => 'https://www.sunrise.ch/it/clienti-privati/dispositivi/handys/huawei-p30-pro.primaryproductimage.code-MDAwMDAwMDAwMDAwMDE5NzU3.format-hardware-configurator-l.png',
            'type'  => 'phone',

            ]
        );

        DB::table('product')->insert([
            
            'name' => 'iphone', 
            'description' => 'Apple iPhone 8 è un smartphone iOS di buon livello, fortemente votato all imaging, in grado di soddisfare anche l utente più esigente. 
                            Dispone di un display Touchscreen da 4.7 pollici con una risoluzione di 1334x750 pixel non particolarmente elevata. 
                            Sul versante delle funzionalità a questo Apple iPhone 8 non manca davvero nulla. A cominciare dal modulo LTE 4G che permette un trasferimento dati e 
                            una navigazione in internet eccellente, passando per la connettività Wi-fi e il GPS.', 
            'price' => 330.30,
            'photo' => 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone8-spacegray?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1541182730534',
            'type'  => 'phone',
            ]
        );

        DB::table('product')->insert([
            
            'name' => 'iphone 10', 
            'description' => 'Apple iPhone X è un smartphone iOS di buon livello, fortemente votato all imaging, in grado di soddisfare anche l utente più esigente. 
                            Dispone di un enorme display Touchscreen da 5.8 pollici 
                            con una risoluzione di 2436x1125 pixel.', 
            'price' => 530.30,
            'photo' => 'https://thumbs.dreamstime.com/b/il-iphone-di-apple-rotante-bianco-con-l-ios-lockscreen-la-facciata-frontale-ed-lato-posteriore-isolati-su-fondo-109726064.jpg',
            'type'  => 'phone',
            ]
        );

        DB::table('product')->insert([
            
            'name' => 'redmi note 10', 
            'description' => 'Redmi Note 10, uno smartphone con Android di fascia media.
                             Il display di Redmi Note 10 è da 6,43 pollici e ha una densità di pixel di 409 ppi, questo poiché la sua risoluzione è di FHD+ / 1080 x 2400 pixel.
                            La camera ha una risoluzione di 48 megapixel e registra video a 4K - 3840 x 2160 pixel. 
                            Questa fotocamera ha a disposizione anche un flash Singolo. La fotocamera frontale ha una risoluzione invece di 13 megapixel.', 
            'price' => 420.30,
            'photo' => 'https://i01.appmifile.com/webfile/globalimg/gaobiyun/cellphone_800/K19-Silver-800.png',
            'type'  => 'phone',
            ]
        );
    }
}
