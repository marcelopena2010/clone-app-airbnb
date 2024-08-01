CREATE PROC [dbo].[GetIcons]
AS
BEGIN
    SELECT IconsId, IconsName, IconsDesigns
    FROM Icons
END
GO