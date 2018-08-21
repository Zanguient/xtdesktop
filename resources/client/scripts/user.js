var _username = mywindow.findChild("_username");

function saveDesktopPrefs()
{
   var sql = "SELECT setUserPreference(LOWER(TRIM(<? value('user') ?>::TEXT)), "
           + "                         'xtdesktop/manualConsoleRefresh'::TEXT, 't') "
           + "WHERE NOT EXISTS (SELECT 1 FROM usrpref "
           + "                   WHERE usrpref_name = 'xtdesktop/manualConsoleRefresh' "
           + "                     AND usrpref_username=LOWER(TRIM(<? value('user') ?>)));";
   toolbox.executeQuery(sql, { user: _username.text});
}

mywindow.findChild("_save").clicked.connect(saveDesktopPrefs);

