#<?php echo $id?>{
  <?php Css::margin($field['margin']);?>
  <?php Css::padding($field['padding']);?> 
  <?php Css::prop('background-color', $field['bg_color']);?>
  <?php Css::fonts($field['body_font']);?>
  <?php Css::prop("color", $field['body_font_color'])?>

  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  <?php 
    // Box shadow
    if( $field['box_shadow'] ):?>
    box-shadow: <?php echo ($field['box_shadow_inset']) ? 'inset' : '' ?> <?php echo $field['box_shadow_horizontal']?>px <?php echo $field['box_shadow_vertical']?>px <?php echo $field['box_shadow_blur']?>px <?php echo $field['box_shadow_spread']?>px <?php echo $field['box_shadow_color']?>;
  <?php endif;?>
}

#<?php echo $id?> .qx-title{
	<?php Css::fonts($field['title_font']);?>
	<?php Css::prop("color", $field['title_color'])?>
}

<?php 
  // Hover animation box shadow
  if( $field['hover_animation'] === 'shadow' ):?>
  #<?php echo $id?>:hover{
    box-shadow: <?php echo $field['hover_shadow_horizontal']?>px <?php echo $field['hover_shadow_vertical']?>px <?php echo $field['hover_shadow_blur']?>px <?php echo $field['hover_shadow_spread']?>px <?php echo $field['hover_shadow_color']?>;
    transform: scale(<?php echo $field['hover_shadow_scale']?>);
  }
<?php endif;?> 