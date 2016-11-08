<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(
	'*' => array(
		'tablePrefix' => 'craft'
	),

	'craft-webpack-tachyons.dev' => array(
		'server' => 'localhost',
		'user' => 'root',
		'password' => 'drowssap',
		'database' => 'craftwebpacktachyons_dev'
	),

);
